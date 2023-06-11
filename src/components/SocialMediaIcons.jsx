
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/melinda-e-m/"
                target="-blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/Melinda-EM"
                target="-blank"
                rel="noreferrer"
            >
                <img alt="github-link" src={require("../assets/github.png")} width="30px" border="rounded" />
            </a>
        </div>
    )
}

export default SocialMediaIcons