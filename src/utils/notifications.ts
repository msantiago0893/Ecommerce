import Swal from 'sweetalert2';

export const showNotification = (message: string): void => {
  Swal.fire({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500
  });
};
