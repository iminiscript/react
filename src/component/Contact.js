import con1 from '../img-1.jpeg';
import con2 from '../img-2.jpeg';
import con3 from '../img-3.jpeg';

import ContactCard from './contact-card';
import ContactCardObject from './contact-card-object';

function Contact() {
    return (
        <div className="container">
            <ContactCardObject
                contact={{ imgUrl: con2, name: "Maninder", phone: "1234566" }}
             />

            <ContactCard 
                imgUrl={con1}
                name="Contact 1"
                phone="1234"
            />
            <ContactCard
                imgUrl={con2}
                name="Contact 2"
                phone="sdsdds"
            />
            <ContactCard 
                imgUrl={con3}
                name="Contact 3"
                phone="sasdsdsd"
            />
        </div>
    )
}

export default Contact;