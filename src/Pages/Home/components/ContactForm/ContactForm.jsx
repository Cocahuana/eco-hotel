import React, { useState, useRef } from "react";
import Form from "../../../../components/Form/Form";
import FormInput from "../../../../components/Form/FormInput/FormInput";
import { Heading, Box, Flex } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
function ContactForm(props) {
	const [message, setMessage] = useState("");
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
				},
				(error) => {
					console.log("Error: ", error.text);
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
			{console.log(message)}
			<p fontSize='3rem' color='green'>
				{message}
			</p>
		</Box>
	);
}

export default ContactForm;
