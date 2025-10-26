import Image from "next/image";
import React from "react";


const ProfilePicture: React.FC = async() => {
    return <div className="basis-69.75 h-89.75 px-10 py-8 xs:p-10">
        <Image className="w-full h-full rounded-4xl object-cover select-none lg:rounded-tr-none" src="/images/avatars/rizky-pratama-profile-picture.png" width={280} height={280} alt={`${process.env.NEXT_PUBLIC_PROFILE_NAME} Profile Picture`}/>
    </div>;
};

export default ProfilePicture;
