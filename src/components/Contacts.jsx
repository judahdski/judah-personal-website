import { contact } from "../assets/data";

const Contacts = () => {
    return (
        <section id="contacts" className="w-full flex justify-center items-center px-8 md:px-[72px] text-white">
            <div className="w-full flex flex-col gap-12 md:gap-[72px]">
                <h1 className="text-[32px] md:text-[64px] font-medium  tracking-wider">
                    Let&apos;s work <br /> together
                </h1>
                <hr />
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <a 
                        href={`mailto:${contact.email}`} 
                        className="inline-block text-center py-3 w-full border-solid border-[1px] border-[#F75959] hover:bg-[#F75959] hover:text-[#fff] ease-in duration-100"
                        >{contact.email}</a>
                    <a 
                        href={`tel:${contact.phoneNumber}`} 
                        className="inline-block text-center py-3 w-full border-solid border-[1px] border-[#F75959] hover:bg-[#F75959] hover:text-[#fff] ease-in duration-100"
                        >{contact.phoneNumber}</a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
