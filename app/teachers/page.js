import BackgroundImage from "@/app/Components/BackgroundImage/BackgroundImage";
import AnimatedLayout from "@/app/Components/AnimatedLayout/AnimatedLayout";
import PageHeadline from "@/app/Components/PageHeadline/PageHeadline";
import Gallery from "@/app/Components/Gallery/Gallery";

import {data} from "@/app/teachers/data";

export const metadata = {
    title: 'Наші вчителі'
}

const Teachers = props => {
    return (
        <>
            <BackgroundImage
                img="/bg8.jpg"
                opacity={0.5}
            />
            <AnimatedLayout>
                <PageHeadline>Наші вчителі</PageHeadline>
                <Gallery
                    items={data}
                    aspectRatio="0.75"
                />
            </AnimatedLayout>
        </>
    )
}

export default Teachers;