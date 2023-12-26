import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { getReservations } from '../redux/reservations/reservationsSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/reservation.css';

const Reservations = () => {
  const { reservations, isLoading, error } = useSelector((store) => store.reservations);
  const { cars } = useSelector((store) => store.cars);
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const userId = user.user.user.id;

  const ownsReservations = reservations.filter((reservation) => reservation.user_id === userId);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error-container">
        <h2>Oopps somethings went wrong.PLease try again!</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="reservation-page">
      <h1 className="reserve-title">All the Reservations</h1>
      <Swiper
        navigation
        slidesPerView={1}
        spaceBetween={60}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1204: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {ownsReservations.map((reservation) => {
          const reservedCar = cars.filter((car) => car.id === reservation.car_id);
          return (
            <SwiperSlide className="reservation-info flex" key={reservation.id}>
              <div className="reservation-imag flex">
                { reservedCar.length && (
                  <>
                    <img className="photo" src={reservedCar[0].photo} alt={reservedCar[0].model} />
                    <h2 className="text-center">
                      {reservedCar[0].model}
                    </h2>
                  </>
                )}
                { !reservedCar.length && (
                <>
                  <img className="photo" src="" alt="" />
                  <p className="text-center">
                    Car not available
                  </p>
                </>
                )}
              </div>
              <div className="reserve-details">
                <p>
                  <strong>City:&ensp;</strong>
                  {reservation.city}
                </p>
                <p>
                  <strong>Date:&ensp;</strong>
                  {reservation.date}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Reservations;
