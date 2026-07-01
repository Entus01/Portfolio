import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../content/profile.js";
import "./SocialLinks.css";

export default function SocialLinks({ variant }) {
    const contactMethods = [
        {
            id: "email",
            label: "Email",
            href: `mailto:${profile.email}`,
            icon: MdOutlineEmail,
            external: false,
        },
        {
            id: "phone",
            label: "Phone",
            href: `tel:${profile.phone}`,
            icon: MdOutlinePhone,
            external: false,
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            href: profile.linkedin,
            icon: FaLinkedin,
            external: true,
        },
        {
            id: "github",
            label: "GitHub",
            href: profile.github,
            icon: FaGithub,
            external: true,
        },
    ];

    return (
        <ul className={`social-links social-links--${variant}`}>
            {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                    <li key={method.id} className="social-links__item">
                        <a
                            href={method.href}
                            className="social-links__link"
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                        >
                            <Icon className="social-links__icon" />

                            {variant === "list" && (
                                <span className="social-links__label">
                                    {method.label}
                                </span>
                            )}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}