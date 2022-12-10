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
	const sendEmail = (form) => {
		emailjs
			.sendForm(
				emailJsSettings.serviceId,
				emailJsSettings.templateId,
				refForm.current,
				emailJsSettings.publicKey
			)
			.then(
				(result) => {
					console.log("Result: ", result);
					setStatus(true);
					setMessage(
						`Le agradecemos su solicitud ${form.fullName} ! Usted será respondido al mail: ${form.email} o a este numero de teléfono: ${form.phoneNumber}. Nos contactaremos con usted cuanto antes!`
					);
				},
				(error) => {
					console.log("Error: ", error);
					setStatus(false);
					setMessage(
						`Hubo un problema al enviar la solicitud, por favor vuelvalo a intentar`
					);
				}
			);
	};
	const submit = (form) => {
		sendEmail(form);
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
