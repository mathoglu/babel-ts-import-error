declare module 'react-modal' {

    import ReactElement = __React.ReactElement;
    import Component = __React.Component;

    interface ModalProps {
        className?: string;
        isOpen: boolean;
        onAfterOpen?: Function;
        onRequestClose?: Function;
        closeTimeoutMS?: number;
        style?: Object;
    }

    export default class Modal extends __React.Component<ModalProps,{}>{}
}
