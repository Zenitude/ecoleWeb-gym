import { useEffect, useRef } from "react";
import { ModalContainer, CloseModal } from "./Modal.style";
import { ModalProps } from "../../utils/types/types";

export default function Modal({show, setShow, datasImg}: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = modalRef.current;
        if(show) { dialog?.showModal() } 
        else { dialog?.close() }
    }, [show])

    return (
    <ModalContainer ref={modalRef}>
        <CloseModal onClick={() => setShow(false)}>X</CloseModal>
        <img src={datasImg.src} alt={datasImg.alt} />
    </ModalContainer>
    )
}
