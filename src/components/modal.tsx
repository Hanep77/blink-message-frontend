import { Dispatch, SetStateAction } from "react"

type DialogProps = {
    type: string,
    dialogText: string,
    confirmText: string,
    setModalConfirm: Dispatch<SetStateAction<boolean>>,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
}

export default function Modal({type, dialogText, confirmText, setModalConfirm, setModalOpen}: DialogProps){
    return (
        <>
            <div className="absolute left-[40%] inset-y-56 bg-gray-600 shadow-2xl h-fit text-center justify-center p-5 rounded-lg w-max transition-all before:animate-bounce">
                <div className="font-bold text-2xl border-b-2 pb-3">{type}</div>
                <div className="p-3 border-b-2 pb-3">{dialogText}</div>
                <div className="grid grid-cols-2 mt-4 w-fit gap-10  justify-center m-auto">
                    <button className=" text-white border-gray-800 border rounded-lg p-2 hover:bg-gray-800 transition-all" onClick={() => {setModalOpen(false)}}>Tutup</button>
                    <button className=" text-white border-gray-800 border rounded-lg p-2 hover:bg-gray-800 transition-all" onClick={() => setModalConfirm(true)}>{confirmText}</button>
                </div>
            </div>
        </>
    )
}