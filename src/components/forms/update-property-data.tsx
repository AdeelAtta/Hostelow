import Button from "@/components/elements/Button"
import Input from "./form-elements/input";

const UpdatePropertyData = () => {

    return <form onSubmit={() => { }} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Update Hostel Info</h1>
        </div>
        <div>
            <Input
                type="text"
                name="hostelName"
                placeholder="Hostel Name"
                onChange={() => { }}
                value={""}
            />
        </div>
            <Input
                type="text"
                name="location"
                placeholder="location"
                onChange={() => { }}
                value={""}
            />
        <div className="grid grid-cols-1 min-w-[320px]">
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
                className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows={8}
                id="message"
            ></textarea>
        </div>
        <div>
            <Button text="save" type="submit" />
        </div>
    </form>

}

export default UpdatePropertyData;