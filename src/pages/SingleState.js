import React from 'react';
import { useParams } from 'react-router-dom';
import ALComponent from '../components/ALComponent';
import AKComponent from '../components/AKComponent';
import ARComponent from '../components/ARComponent';
import AZComponent from '../components/AZComponent';
import CAComponent from '../components/CAComponent';
import COComponent from '../components/COComponent';
import CTComponent from '../components/CTComponent';
import DEComponent from '../components/DEComponent';
import FLComponent from '../components/FLComponent';
import GAComponent from '../components/GAComponent';
import HIComponent from '../components/HIComponent';
import IDComponent from '../components/IDComponent';
import ILComponent from '../components/ILComponent';
import INComponent from '../components/INComponent';
import IAComponent from '../components/IAComponent';
import KSComponent from '../components/KSComponent';
import KYComponent from '../components/KYComponent';
import LAComponent from '../components/LAComponent';
import MEComponent from '../components/MEComponent';
import MDComponent from '../components/MDComponent';
import MAComponent from '../components/MAComponent';
import MIComponent from '../components/MIComponent';
import MNComponent from '../components/MNComponent';
import MSComponent from '../components/MSComponent';
import MOComponent from '../components/MOComponent';
import MTComponent from '../components/MTComponent';
import NEComponent from '../components/NEComponent';
import NVComponent from '../components/NVComponent';
import NHComponent from '../components/NHComponent';
import NJComponent from '../components/NJComponent';
import NMComponent from '../components/NMComponent';
import NYComponent from '../components/NYComponent';
import NCComponent from '../components/NCComponent';
import NDComponent from '../components/NDComponent';
import OHComponent from '../components/OHComponent';
import OKComponent from '../components/OKComponent';
import ORComponent from '../components/ORComponent';
import PAComponent from '../components/PAComponent';
import RIComponent from '../components/RIComponent';
import SCComponent from '../components/SCComponent';
import SDComponent from '../components/SDComponent';
import TNComponent from '../components/TNComponent';
import TXComponent from '../components/TXComponent';
import UTComponent from '../components/UTComponent';
import VTComponent from '../components/VTComponent';
import VAComponent from '../components/VAComponent';
import WAComponent from '../components/WAComponent';
import WVComponent from '../components/WVComponent';
import WIComponent from '../components/WIComponent';
import WYComponent from '../components/WYComponent';
import NotFound from './NotFound'

const SingleState = (props) => {
  let { id } = useParams();
  let singleStateComponent
  console.log(props)
  console.log(id)

  switch (id) {
    case 'AL':
      singleStateComponent = <ALComponent />
      break;
    case 'AK':
      singleStateComponent = <AKComponent />
      break;
    case 'AZ':
      singleStateComponent = <AZComponent />
      break;
    case 'AR':
      singleStateComponent = <ARComponent />
      break;
    case 'CA':
      singleStateComponent = <CAComponent />
      break;
    case 'CO':
      singleStateComponent = <COComponent />
      break;
    case 'CT':
      singleStateComponent = <CTComponent />
      break;
    case 'DE':
      singleStateComponent = <DEComponent />
      break;
    case 'FL':
      singleStateComponent = <FLComponent />
      break;
    case 'GA':
      singleStateComponent = <GAComponent />
      break;
    case 'HI':
      singleStateComponent = <HIComponent />
      break;
    case 'ID':
      singleStateComponent = <IDComponent />
      break;
    case 'IL':
      singleStateComponent = <ILComponent />
      break;
    case 'IN':
      singleStateComponent = <INComponent />
      break;
    case 'IA':
      singleStateComponent = <IAComponent />
      break;
    case 'KS':
      singleStateComponent = <KSComponent />
      break;
    case 'KY':
      singleStateComponent = <KYComponent />
      break;
    case 'LA':
      singleStateComponent = <LAComponent />
      break;
    case 'ME':
      singleStateComponent = <MEComponent />
      break;
    case 'MD':
      singleStateComponent = <MDComponent />
      break;
    case 'MA':
      singleStateComponent = <MAComponent />
      break;
    case 'MI':
      singleStateComponent = <MIComponent />
      break;
    case 'MN':
      singleStateComponent = <MNComponent />
      break;
    case 'MS':
      singleStateComponent = <MSComponent />
      break;
    case 'MO':
      singleStateComponent = <MOComponent />
      break;
    case 'MT':
      singleStateComponent = <MTComponent />
      break;
    case 'NE':
      singleStateComponent = <NEComponent />
      break;
    case 'NV':
      singleStateComponent = <NVComponent />
      break;
    case 'NH':
      singleStateComponent = <NHComponent />
      break;
    case 'NJ':
      singleStateComponent = <NJComponent />
      break;
    case 'NM':
      singleStateComponent = <NMComponent />
      break;
    case 'NY':
      singleStateComponent = <NYComponent />
      break;
    case 'NC':
      singleStateComponent = <NCComponent />
      break;
    case 'ND':
      singleStateComponent = <NDComponent />
      break;
    case 'OH':
      singleStateComponent = <OHComponent />
      break;
    case 'OK':
      singleStateComponent = <OKComponent />
      break;
    case 'OR':
      singleStateComponent = <ORComponent />
      break;
    case 'PA':
      singleStateComponent = <PAComponent />
      break;
    case 'RI':
      singleStateComponent = <RIComponent />
      break;
    case 'SC':
      singleStateComponent = <SCComponent />
      break;
    case 'SD':
      singleStateComponent = <SDComponent />
      break;
    case 'TN':
      singleStateComponent = <TNComponent />
      break;
    case 'TX':
      singleStateComponent = <TXComponent />
      break;
    case 'UT':
      singleStateComponent = <UTComponent />
      break;
    case 'VT':
      singleStateComponent = <VTComponent />
      break;
    case 'VA':
      singleStateComponent = <VAComponent />
      break;
    case 'WA':
      singleStateComponent = <WAComponent />
      break;
    case 'WV':
      singleStateComponent = <WVComponent />
      break;
    case 'WI':
      singleStateComponent = <WIComponent />
      break;
    case 'WY':
      singleStateComponent = <WYComponent />
      break;
    default:
      singleStateComponent = <NotFound />
      break;
  }

  return (
    <>
      {singleStateComponent}
    </>
  );
};

export default SingleState;