"use client";

import TitleHeading from "@/components/TitleHeading";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import useSendMessage from "@/hooks/useSendMessage";
import {useAppContext} from "@/providers/clients/ContextProvider";
import {ContextData} from "@/types/interfaces/ContextData";
import {IconChevronRightPipe} from "@tabler/icons-react";
import React from "react";
import Input from "../ui/Input";


const ContactForm: React.FC = () => {
    const context: ContextData | undefined = useAppContext();

    const {register, handleSubmit, errors, onSubmit} = useSendMessage(context?.toast, context?.setToast);

    return <section className="flex flex-col gap-4">
        <TitleHeading>Let&#39;s make your project brilliant!</TitleHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <Input {...register('name')} type="text" placeholder="Full Name"/>
                    {errors.name && <p className="ml-2 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Input {...register('email')} type="text" placeholder="Email Address"/>
                    {errors.email && <p className="ml-2 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                    <Textarea {...register('message')} rows={5} placeholder="Your Message"></Textarea>
                    {errors.message && <p className="ml-2 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                <div>
                    <Button className="duration-300 hover:text-primary-100" aria-label="Send Message">
                        <span>Send Message</span>
                        <IconChevronRightPipe className="inline-block size-4 ml-2 mt-0.5"/>
                    </Button>
                    {errors.token && <p className="ml-2 text-sm text-red-500">{errors.token.message}</p>}
                </div>
            </fieldset>
        </form>
    </section>;
};

export default ContactForm;
