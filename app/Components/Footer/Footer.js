import {SocialIcon} from "react-social-icons";

const Footer = props => {
    return (
        <footer className="px-6 pt-4 pb-12 flex flex-col gap-y-6">
            <div className="flex w-full justify-center gap-x-8">
                <SocialIcon url="https://www.facebook.com/adt.niko/" network="facebook" bgColor="white"  />
                <SocialIcon url="https://www.instagram.com/adt.niko/?igshid=MzRlODBiNWFlZA%3D%3D" network="instagram" bgColor="white"  />
            </div>
            <p className="self-center text-sm text-gray-400">@2023 All rights reserved</p>
        </footer>
    )
}

export default Footer;