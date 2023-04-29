const Contacts = () => {
    return (
        <section id="contacts" className="contacts justify-content-center align-items-stretch">
            <div
                className="p-2 
                        d-flex flex-column justify-content-center align-items-start gap-3"
            >
                <h1>
                    Let&apos;s work <br /> together
                </h1>
                <hr className="my-5" />
                <div className="detail-contacts d-flex flex-column flex-lg-row align-items-stretch align-self-center gap-4">
                    <a href="mailto:judahjmdasuki@gmail.com" className="contact-btn text-decoration-none text-center">
                        judahjmdasuki@gmail.com
                    </a>
                    <a href="tel:+6281387306360" className="contact-btn text-decoration-none text-center">
                        +62 813 87306360
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
