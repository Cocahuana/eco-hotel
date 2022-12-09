import React, { useState, useRef } from "react";
import Form from "../../../../components/Form/Form";
import FormInput from "../../../../components/Form/FormInput/FormInput";
import { Box, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";

/*
 * @fullName, @email y @phoneNumber son variables usadas en emailJs para el template indicado en emailjsSettings.templateId
 *
 *
 */
function ContactForm(props) {
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null);
	const refForm = useRef();
	const emailJsSettings = {
		serviceId: "service_s6fk0l3",
		templateId: "Eco Hotel Pragma",
		publicKey: "v9enjVVlkY_oP9iFX",
	};

	const initialValues = {
		fullName: "",
		email: "",
		phoneNumber: "",
	};
	const sendEmail = (formInfo) => {
		console.log("Send Email: formInfo: ", formInfo);
		emailjs
			.sendForm(
				emailJsSettings.serviceId,
				emailJsSettings.templateId,
				refForm.current,
				emailJsSettings.publicKey
			)
			.then(
				(result) => {
					console.log("Result: ", result.text);
					setStatus(true);
				},
				(error) => {
					console.log("Error: ", error.text);
					setStatus(false);
				}
			);
	};
	console.log("RefForm: ", refForm);
	const submit = (form) => {
		sendEmail(form);
		setMessage(
			`Thanks for signing up, ${form.fullName} ! We've sent you an email to ${form.email} with this number: ${form.phoneNumber}.`
		);
	};
	return (
		<Box
			w={props.w}
			h={props.h}
			m={props.m}
			paddingLeft={props.paddingLeft}
		>
			<Form myref={refForm} submit={submit} initialValues={initialValues}>
				<FormInput
					label='NOMBRE Y APELLIDO'
					name='fullName'
					leftIcon={<FaUser />}
				/>
				<FormInput
					label='EMAIL'
					name='email'
					leftIcon={<EmailIcon />}
				/>
				<FormInput
					label='NÚMERO DE TELÉFONO'
					name='phoneNumber'
					leftIcon={<PhoneIcon />}
				/>
			</Form>
			{status === true ? (
				<Text fontSize='1rem' color='green'>
					{message}
				</Text>
			) : (
				<Text fontSize='1rem' color='red'>
					{message}
				</Text>
			)}
		</Box>
	);
}

export default ContactForm;
