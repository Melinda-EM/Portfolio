import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-gradient-rainblue before:absolute before:w-6 before:h-6
        before:rounded-full before:border-2 before:border-white before:left[-20%]
        before:top-[-10%]`

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-gray"}
                    w-4 h-4 rounded-full`}
                href="#home"
                onClick={() => setSelectedPage('home')}
            />
            <AnchorLink
                className={`${selectedPage === 'skills' ? selectedStyles : "bg-dark-gray"}
                    w-4 h-4 rounded-full`}
                href="#skills"
                onClick={() => setSelectedPage('skills')}
            />
            <AnchorLink
                className={`${selectedPage === 'projects' ? selectedStyles : "bg-dark-gray"}
                    w-4 h-4 rounded-full`}
                href="#projects"
                onClick={() => setSelectedPage('projects')}
            />
            <AnchorLink
                className={`${selectedPage === 'about' ? selectedStyles : "bg-dark-gray"}
                    w-4 h-4 rounded-full`}
                href="#about"
                onClick={() => setSelectedPage('about')}
            />
            <AnchorLink
                className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-gray"}
                    w-4 h-4 rounded-full`}
                href="#contact"
                onClick={() => setSelectedPage('contact')}
            />
        </div>
    );
};

export default DotGroup;