import React from 'react';

const Map = () => {
    return (
        <section className='map'>
            <div className="map__content">
                <h2 className='map__title'>КОНТАКТЫ</h2>
                <div className="map__block">
                    <div className="map__block-box">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M4.23914 10.3912C4.25354 6.15065 7.7029 2.72465 11.9435 2.73906C16.1841 2.75347 19.6101 6.20282 19.5957 10.4434V10.5304C19.5435 13.2869 18.0044 15.8347 16.1174 17.826C15.0382 18.9466 13.8331 19.9387 12.5261 20.7825C12.1766 21.0848 11.6582 21.0848 11.3087 20.7825C9.3602 19.5143 7.65007 17.9131 6.25653 16.0521C5.01449 14.4293 4.3093 12.4597 4.23914 10.4173L4.23914 10.3912Z"
      stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="11.9174" cy="10.539" r="2.46087" stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
</svg>
                        </span>
                        <div className='map__box'>
                            <p className='map__text'>Наш адрес:</p>
                            <p className='map__subtitle'>МО, городской округ Красногорск, село Ильинкое,
                                Экспериментальная улица, 10
                            </p>
                        </div>
                    </div>
                    <div className="map__block-box">
                        <span>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2677 9.06104L13.0023 12.4953C12.1951 13.1282 11.0635 13.1282 10.2563 12.4953L5.95422 9.06104"
      stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd"
      d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
      stroke="#6D9C74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        </span>
                        <div className='map__box'>
                            <p className='map__text'>Наша почта:</p>
                            <p className='map__subtitle'>auto.wash@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="map__order">
                    <div className="map__order-info">
                        <button className='map__order-btn'>ЗАБРОНИРОВАТЬ СТОЛ</button>
                        <div>
                            <h3 className='map__order-title'>+7 (917) 510-57-59</h3>
                            <p className='map__order-text'>Звоните или оставляйте заявку</p>
                        </div>
                    </div>
                    <div className="map__order-social">
                        <p>Мы в соц сетях:</p>
                        <span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_19_332)">
<path
    d="M16.625 0H2.375C1.06519 0 0 1.06519 0 2.375V16.625C0 17.9348 1.06519 19 2.375 19H9.5V12.4688H7.125V9.5H9.5V7.125C9.5 5.15731 11.0948 3.5625 13.0625 3.5625H15.4375V6.53125H14.25C13.5945 6.53125 13.0625 6.4695 13.0625 7.125V9.5H16.0312L14.8438 12.4688H13.0625V19H16.625C17.9348 19 19 17.9348 19 16.625V2.375C19 1.06519 17.9348 0 16.625 0Z"
    fill="white"/>
</g>
<defs>
<clipPath id="clip0_19_332">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
</svg>
                        </span>
                        <span>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_19_336)">
<path
    d="M11.2115 10.4714C10.9069 10.294 10.4836 10.294 10.1396 10.294H9.01009V12.6215H10.0468C10.4305 12.6215 10.92 12.6491 11.2509 12.4167C11.5547 12.2122 11.7267 11.8109 11.7267 11.4287C11.7267 11.0736 11.5153 10.6489 11.2115 10.4714ZM10.7854 8.4837C11.0368 8.29231 11.1686 7.9511 11.1686 7.63681C11.1686 7.29541 11.01 6.96766 10.7193 6.79032C10.4151 6.61299 9.85916 6.65396 9.50211 6.65396H9.01009V8.7024H9.66104C10.0313 8.7022 10.4681 8.72951 10.7854 8.4837ZM16.3477 0H4.02695C2.18276 0 0.6875 1.49526 0.6875 3.33984V15.6602C0.6875 17.5043 2.18276 19 4.02695 19H16.3477C18.1918 19 19.6875 17.5043 19.6875 15.6602V3.33984C19.6875 1.49526 18.1918 0 16.3477 0ZM10.7029 14.3559H6.82133V4.9877H11.0623C12.2908 4.9877 13.4242 5.76967 13.4242 7.14895C13.4242 8.21394 12.8297 8.94326 12.0713 9.16988V9.19739C13.1958 9.42974 13.999 10.0405 13.999 11.514C13.999 12.8776 13.0704 14.3559 10.7029 14.3559Z"
    fill="white"/>
</g>
<defs>
<clipPath id="clip0_19_336">
<rect width="19" height="19" fill="white" transform="translate(0.6875)"/>
</clipPath>
</defs>
</svg>
                        </span>
                        <span>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_19_339)">
<path
    d="M15.8125 0H3.93748C1.96982 0 0.375 1.59482 0.375 3.56248V15.4375C0.375 17.4052 1.96982 19 3.93748 19H15.8125C17.7802 19 19.375 17.4051 19.375 15.4375V3.56248C19.375 1.59482 17.7802 0 15.8125 0ZM15.7116 11.6268C15.6474 12.4177 15.0466 13.427 14.207 13.5731C11.5173 13.7821 8.33006 13.756 5.54422 13.5731C4.67496 13.4638 4.10379 12.4165 4.03967 11.6268C3.9043 9.96667 3.9043 9.02141 4.03967 7.36129C4.10379 6.57161 4.68923 5.53015 5.54422 5.43517C8.29804 5.20359 11.5031 5.25347 14.207 5.43517C15.1736 5.47078 15.6474 6.46711 15.7116 7.25798C15.8445 8.9181 15.8445 9.96667 15.7116 11.6268Z"
    fill="white"/>
<path d="M8.6875 11.875L12.25 9.5L8.6875 7.125V11.875Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_19_339">
<rect width="19" height="19" fill="white" transform="translate(0.375)"/>
</clipPath>
</defs>
</svg>
                        </span>
                        <span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_19_366)">
<path
    d="M11.1799 8.27967C10.8033 7.75231 10.1855 7.40576 9.49239 7.40576C8.79929 7.40576 8.18152 7.75231 7.80484 8.27967C7.56376 8.62622 7.41309 9.04811 7.41309 9.50013C7.41309 10.6453 8.34727 11.5794 9.49239 11.5794C10.6375 11.5794 11.5717 10.6453 11.5717 9.50013C11.5717 9.04811 11.421 8.62622 11.1799 8.27967Z"
    fill="white"/>
<path
    d="M12.4909 8.29468C12.6416 8.59603 12.732 9.07818 12.732 9.50007C12.732 11.278 11.2856 12.7396 9.49253 12.7396C7.69951 12.7396 6.25304 11.2931 6.25304 9.50007C6.25304 9.06312 6.34344 8.59603 6.49412 8.29468H4.67096V13.1313C4.67096 13.7641 5.22845 14.3216 5.86128 14.3216H13.1238C13.7566 14.3216 14.3141 13.7641 14.3141 13.1313V8.29468H12.4909Z"
    fill="white"/>
<path d="M13.7717 4.94964H12.0239V6.9536H14.0128V5.20578V4.93457L13.7717 4.94964Z" fill="white"/>
<path
    d="M14.2236 0.00878906H4.7613C2.13957 0.00878906 0 2.14836 0 4.77009V14.2475C0 16.8541 2.13957 18.9937 4.7613 18.9937H14.2387C16.8604 18.9937 19 16.8541 19 14.2324V4.77009C18.9849 2.14836 16.8454 0.00878906 14.2236 0.00878906ZM15.3688 8.28079V13.1325C15.3688 14.3982 14.3894 15.3775 13.1237 15.3775H5.86122C4.59556 15.3775 3.61618 14.3982 3.61618 13.1325V8.28079V5.87001C3.61618 4.60435 4.59556 3.62497 5.86122 3.62497H13.1237C14.3894 3.62497 15.3688 4.60435 15.3688 5.87001V8.28079Z"
    fill="white"/>
</g>
<defs>
<clipPath id="clip0_19_366">
<rect width="19" height="19" fill="white"/>
</clipPath>
</defs>
</svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;