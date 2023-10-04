// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';

/**
 * Validaciones correspondientes con yup para los formularios
 */

// eslint-disable-next-line import/prefer-default-export
export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Es requerido el nombre'),
  edad: Yup.number().required('Es requeridos').min(10, 'Debe ser mayor a 10'),
});
