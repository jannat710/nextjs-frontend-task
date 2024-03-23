import Image from "next/image";


const Stories = () => {
    return (

        <div className="w-full mx-auto">
            {/* 1st story */}
            <div className="rounded-md mb-10">
                <div className="">
                    <Image
                        alt="profile"
                        height={500}
                        width={500}
                        className="h-[30vh] w-full mx-auto"
                        src='https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?w=826&t=st=1711042831~exp=1711043431~hmac=0e6fac2ebf6ce2dfd08db9ab4376d76e157fc809de6c17ac5532dd7f70555b96'
                    />
                    <div className="border-x-2 border-gray-100 p-5">
                        <h1 className="text-lg font-semibold py-1">lorem Ipsum</h1>
                        <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel.</p>
                    </div>
                </div>
            </div>
            {/* 2nd story */}
            <div className="rounded-md mb-10">
                <div className="">
                    <Image
                        alt="profile"
                        height={500}
                        width={500}
                        className="h-[30vh] w-full mx-auto"
                        src='https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?w=826&t=st=1711042831~exp=1711043431~hmac=0e6fac2ebf6ce2dfd08db9ab4376d76e157fc809de6c17ac5532dd7f70555b96'
                    />
                    <div className="border-x-2 border-gray-100 p-5">
                        <h1 className="text-lg font-semibold py-1">lorem Ipsum</h1>
                        <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel.</p>
                    </div>
                </div>
            </div>
            {/* 3rd story */}
            <div className="rounded-md mb-10">
                <div className="">
                    <Image
                        alt="profile"
                        height={500}
                        width={500}
                        className="h-[30vh] w-full mx-auto"
                        src='https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?w=826&t=st=1711042831~exp=1711043431~hmac=0e6fac2ebf6ce2dfd08db9ab4376d76e157fc809de6c17ac5532dd7f70555b96'
                    />
                    <div className="border-x-2 border-gray-100 p-5">
                        <h1 className="text-lg font-semibold py-1">lorem Ipsum</h1>
                        <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stories;