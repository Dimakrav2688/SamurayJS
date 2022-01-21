import React from 'react';
import preloader from '../../../../assets/images/preloader.svg'



let Preloader: React.FC = () => {
 return <div style= { {backgroundColor: 'yellowgreen'} }> 
 <img src={preloader} alt={'jpg'}/>
 </div>
}
export default Preloader;