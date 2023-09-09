import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}  >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        title

                    </label>
                    <input className="w-full" type="text" name="" {...register("title")} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;