import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) => {
        console.log(data)
        onCancel()
    }



    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="DevsmanBD" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col ">
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        Title

                    </label>
                    <input className="w-full" type="text" name="" {...register("title")} />
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        Description

                    </label>
                    <textarea className="w-full" type="text" name="" {...register("description")} />
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        Date

                    </label>
                    <input type="date" name="Date" id="Date" {...register("date")} />
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        Assign to

                    </label>
                    <select name="assignTo" id="" {...register("assignTo")}>
                        <option value="anik">Anik</option>
                        <option value="nabil">Nabil</option>
                        <option value="talha">Talha</option>
                        <option value="tofael">Tofael</option>
                        <option value="alamin">Alamin</option>
                        <option value="sagor">Sagor</option>
                        <option value="abtahi">Abtahi</option>
                    </select>
                    <label
                        htmlFor="title"
                        className="mb-5 text-sm font-medium"
                    >
                        Priority
                    </label>
                    <select name="assignTo" id="" {...register("priority")}>
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>

                    </select>

                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => onCancel()} className="px-4 py-2 mt-5 text-white duration-500 transform bg-red-500 rounded-md hover:scale-105" type="submit">Cancel</button>
                        <button className="px-4 py-2 mt-5 text-white duration-500 transform bg-blue-500 rounded-md hover:scale-105" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;