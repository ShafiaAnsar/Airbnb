'use client'

import { useCallback, useEffect, useState } from "react"
import Button from "../Button";
import {IoMdClose} from 'react-icons/io'

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal:React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal ,setShowModal] = useState(isOpen)
  useEffect(()=>{
    setShowModal(isOpen)
  },[isOpen])
  const handleClose = useCallback(()=>{
    if (disabled){
      return
    }
    setShowModal(false)
    setTimeout(()=>{
      onClose()
    },300)
  },[disabled,onClose])
  const handleSubmit = useCallback(()=>{
    if(disabled){
      return
    }
    onSubmit()

  },[disabled,onSubmit])
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);
  if(!isOpen){
    return null
  }
  return (
    <>
    <div className="justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto ">
              {/* //Content */}
              <div className={`translation duration-300 h-full
               ${showModal ? 'translate-y-0' : 'translate-y-full'} 
               ${showModal ? 'opacity-100' : 'opacity-0'}d`}>
                <div className="
                translate
                h-full
                md:h-auto
                relative
                rounded-lg
                shadow-lg
                border-0
                lg:h-auto
                flex flex-col w-full bg-white focus:outline-none outline-none
                ">
                  {/* Header */}
                  <div className="flex items-center p-6 rounded-t relative border-b-[1px] justify-center">
                    <button 
                    onClick={handleClose}
                    className=" p-1 hover:opacity-70 border-0 transition absolute left-9 ">
                      <IoMdClose size= {18}/> 
                    </button>
                    <div className="text-lg font-semibold">
                      {title}
                    </div>
                  </div>
                  {/* Body */}
                  <div className="relative flex-auto p-6">
                    {body}
                  </div>
                  {/* footer */}
                  <div className="flex flex-col gap-2 p-6">
                    <div className="flex flex-row items-center gap-4 w-full">
                      {secondaryAction && secondaryActionLabel && (
                        <Button 
                        outline
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                        />
                      )}
                      <Button 
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                      />
                    </div>
                    {footer}
                  </div>
                </div>

              </div>

            </div>

    </div>
    </>
  )
}

export default Modal