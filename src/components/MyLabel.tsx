import './mylabel.css';

export interface MyLabelProps {
   /**
   * Este es el mensaje que se va a mostrar en la etiqueta
   */
  label: string;
   /**
   * Este es el tamaño por defecto de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Propiedad que convierte en mayuscula o minuscula el label
   */
  allCaps?: boolean,
  /**
   * Este es el color por defecto del label
   */
  color?: 'primary'|'secondary'|'tertiary',
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string,

}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label     = 'No Label',
  size      = 'normal',
  allCaps   = false,
  color     = 'primary',
  fontColor

}:MyLabelProps) => {
  return (
    <>
        <span 
          className={`label ${ size } text-${ color }`}
          style={{ color: fontColor }}
        >
          { allCaps ? label.toLocaleUpperCase() : label }
        </span>
    </>
  )
}
