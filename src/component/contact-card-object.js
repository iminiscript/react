
function ContactCardObject(props) {
    console.log(props);
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} />
            <h1 className="contact-name">{props.contact.name}</h1>
            <p className="contact-phone">{props.contact.phone}</p>
        </div>
    )
}

export default ContactCardObject;