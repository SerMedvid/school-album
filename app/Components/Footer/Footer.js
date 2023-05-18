import {SocialIcon} from "react-social-icons";

const Footer = props => {
    return (
        <footer className="px-6 pt-4 pb-2 flex flex-col gap-y-6">
            <div className="flex w-full justify-center gap-x-8">
                <SocialIcon url="https://facebook.com" network="facebook" bgColor="white"  />
                <SocialIcon url="https://youtube.com" network="youtube" bgColor="white"  />
                <SocialIcon url="https://instagram.com" network="instagram" bgColor="white"  />
            </div>
            <p className="self-center text-sm text-gray-600">@2023 All rights reserved</p>
        </footer>
    )
}

export default Footer;