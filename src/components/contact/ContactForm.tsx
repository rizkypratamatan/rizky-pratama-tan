"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import useSendMessage from "@/hooks/useSendMessage";
import {IconChevronRightPipe} from "@tabler/icons-react";


export default function ContactForm() {
    const {register, handleSubmit, errors, onSubmit} = useSendMessage();

    return <form onSubmit={handleSubmit(onSubmit)}>
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
                <Textarea {...register('message')} className="h-40 resize-none" rows={7} placeholder="Your Message"></Textarea>
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
    </form>;
}
