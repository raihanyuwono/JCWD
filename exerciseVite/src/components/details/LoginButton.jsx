import {
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginButton() {
    const { onOpen, isOpen, onClose } = useDisclosure();

    async function fetchUser(email) {
        const { data } = await axios.get(
            `http://localhost:2000/users?email=${email}`
        );
        console.log(data);
    }

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(7, "Password must bu 7 character")
            .max(15, "Password must less than 16")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            fetchUser(values.email);
            localStorage.setItem("isLogin", "true");
        },
    });

    return (
        <>
            <Button onClick={onOpen}>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl
                                isInvalid={
                                    formik.touched.email && formik.errors.email
                                }
                            >
                                <Input
                                    id={"email"}
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email &&
                                    formik.errors.email && (
                                        <FormErrorMessage>
                                            {formik.errors.email}
                                        </FormErrorMessage>
                                    )}
                            </FormControl>
                            <FormControl
                                isInvalid={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                            >
                                <Input
                                    id={"password"}
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password &&
                                    formik.errors.password && (
                                        <FormErrorMessage>
                                            {formik.errors.password}
                                        </FormErrorMessage>
                                    )}
                            </FormControl>
                            <Button type="submit">Login</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default LoginButton;
