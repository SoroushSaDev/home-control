import {Form, FormikProps} from "formik";

import Input from "@/app/components/shared/form/input";
import {LoginFormValuesInterface} from "@/app/contracts/auth";
import {CheckCircleIcon} from "@heroicons/react/24/solid";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form className="space-y-4 md:space-y-6">
            <div>
                <Input type="email" name="email" label="Email" inputClassName="bg-gray-300 dark:bg-gray-700"
                       labelClassName="!font-bold"/>
            </div>
            <div>
                <Input type="password" name="password" label="Password" inputClassName="bg-gray-300 dark:bg-gray-700"
                       labelClassName="!font-bold"/>
            </div>
            <button type="submit"
                    className="w-full flex justify-center items-center text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black">
                <CheckCircleIcon className="w-5 me-1"/>
                <span className="font-bold">
                    Login
                </span>
            </button>
        </Form>
    )
}

export default InnerLoginForm