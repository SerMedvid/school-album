import BackgroundImage from "@/app/Components/BackgroundImage/BackgroundImage";
import PageHeadline from "@/app/Components/PageHeadline/PageHeadline";
import AnimatedLayout from "@/app/Components/AnimatedLayout/AnimatedLayout";
import MasonryGallery from "@/app/Components/Gallery/MasonryGallery";

import {data} from "@/app/art/data";

export const metadata = {
    title: 'Творчість'
}

const Art = props => {
    return (
        <>
            <BackgroundImage img="/bg3.jpg" opacity={0.5} />
            <AnimatedLayout>
                <PageHeadline>Наша творчість</PageHeadline>
                <MasonryGallery
                    withModal={true}
                    items={data}
                />
            </AnimatedLayout>
        </>
    )
}

export default Art;