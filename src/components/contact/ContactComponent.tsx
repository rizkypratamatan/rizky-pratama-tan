import {IconBrandTelegram, IconChevronRightPipe} from "@tabler/icons-react";


export default function ContactComponent() {
    return (
        <div className="content bg-gradient">
            <div className="relative p-[0.625rem]">
                <div className="max-h-[38.813rem] p-[1.875rem] overflow-y-auto">
                    <section className="flex flex-col gap-[0.938rem] pt-[2.5rem]">
                        <div className="title-bullet w-[8.563rem]">
                            <span><IconBrandTelegram size={'1rem'}/></span>
                            <p>Contact</p>
                        </div>
                        <h2 className="pt-[0.625rem] pb-[1.875rem] text-[2.375rem] font-semibold text-white">Let's Get
                            in Touch!</h2>
                        <div className="grid grid-cols-2 gap-[1.875rem]">
                            <div className="contact-item">
                                <div>
                                    <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"></path>
                                    </svg>
                                    <h3>Phone</h3>
                                </div>
                                <p>+1 840 841 25 69</p>
                            </div>
                            <div className="contact-item">
                                <div>
                                    <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                                    </svg>
                                    <h3>Email</h3>
                                </div>
                                <p>rizkypratama@preloode.com</p>
                            </div>
                            <div className="contact-item col-span-2">
                                <div>
                                    <svg aria-hidden="true" className="e-font-icon-svg e-far-map" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"></path>
                                    </svg>
                                    <h3>Address</h3>
                                </div>
                                <p>Tangerang, Banten, Indonesia</p>
                            </div>
                        </div>
                    </section>
                    <section className="pt-[3.75rem]">
                        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2806064693104!2d106.69667837678374!3d-6.092852293893489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0318a4bdcbcd%3A0x1b087ffd8f68d8e1!2sMelati%204%2C%20Dadap%2C%20Kec.%20Kosambi%2C%20Kabupaten%20Tangerang%2C%20Banten%2015211!5e0!3m2!1sen!2sid!4v1754399355007!5m2!1sen!2sid" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                    <section className="flex flex-col gap-[0.938rem] pt-[2.5rem] pb-[1.875rem]">
                        <h2 className="p-[0.938rem] text-[2.375rem] font-semibold text-white">Let's make your project
                            brilliant!</h2>
                        <form className="contact-form">
                            <fieldset>
                                <input type="text" placeholder="Full Name"/>
                                <input type="text" placeholder="Email Address"/>
                                <textarea rows={3} placeholder="Your Message"></textarea>
                                <div>
                                    <button type="submit">Send Message <IconChevronRightPipe size={'1rem'}/></button>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
