import logoPlaceHolder from "../assets/sponsors/logo_placeholder.svg";
import ima from "../assets/sponsors/Gold/IMA.jpg";
import esun from "../assets/sponsors/Gold/esunbank.jpg";
import cfh from "../assets/sponsors/Gold/cfh.jpg";
import qnap from "../assets/sponsors/Bronze/QNAP.jpg";
import kktix from "../assets/sponsors/Bronze/KKTIX.jpg";
import onlyoffice from "../assets/sponsors/Bronze/ONLYOFFICE.jpg";
import andes from "../assets/sponsors/Supporter/Andes.jpg";
import doit from "../assets/sponsors/SpecialThanks/doit.jpg";
import sifive from "../assets/sponsors/SpecialThanks/sifive.jpg";

//Sponsor data structure and types
export type SponsorItem = {
  name?: string;
  nameKey?: string;
  partnerTag?: string;
  description?: string;
  descriptionKey?: string;
  logoUrl: string;
  url: string;
};

export type SponsorLevel = {
  sponsorLevelName: string;
  sizeOnLargeScreen: number;
  sizeOnMediumScreen: number;
  sizeOnSmallScreen: number;
  showPopup: boolean;
  list: SponsorItem[];
};

export const sponsors: SponsorLevel[] = [
  // {
  //   sponsorLevelName: "Titanium",
  //   sizeOnLargeScreen: 6,
  //   sizeOnMediumScreen: 6,
  //   sizeOnSmallScreen: 6,
  //   showPopup: true,
  //   list: [
  //     // {
  //     //   name: "Become a sponsor!",
  //     //   logoUrl: logoPlaceHolder.src,
  //     //   url: "/sponsors/become-a-sponsor",
  //     //   description:
  //     //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
  //     // },
  //   ],
  // },
  // {
  //   sponsorLevelName: "Diamond",
  //   sizeOnLargeScreen: 5,
  //   sizeOnMediumScreen: 5,
  //   sizeOnSmallScreen: 4,
  //   showPopup: true,
  //   list: [
  //     // {
  //     //   name: "Become a sponsor!",
  //     //   logoUrl: logoPlaceHolder.src,
  //     //   url: "/sponsors/become-a-sponsor",
  //     //   description:
  //     //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
  //     // },
  //   ],
  // },
  {
    sponsorLevelName: "Gold",
    sizeOnLargeScreen: 3,
    sizeOnMediumScreen: 3,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      // {
      //   name: "Become a sponsor!",
      //   nameKey: "gsponsorTitle[Demo]",
      //   partnerTag: "-Demo Partner",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   descriptionKey: "gsponsordescription[Demo]",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
      {
        nameKey: "gsponsorTitleIMA",
        logoUrl: ima.src,
        url: "https://ima.org/",
        descriptionKey: "gsponsordescriptionIMA",
      },
      {
        nameKey: "gsponsorTitleESunBank",
        logoUrl: esun.src,
        url: "https://www.esunbank.com/zh-tw/personal",
        descriptionKey: "gsponsordescriptionESunBank",
      },
      {
        nameKey: "gsponsorTitleCFH",
        logoUrl: cfh.src,
        url: "https://www.cathayholdings.com/holdings/brand/fintech",
        descriptionKey: "gsponsordescriptionCFH",
      },
    ],
  },
  // {
  //   sponsorLevelName: "Silver",
  //   sizeOnLargeScreen: 3,
  //   sizeOnMediumScreen: 3,
  //   sizeOnSmallScreen: 2,
  //   showPopup: true,
  //   list: [
  //     // {
  //     //   name: "Become a sponsor!",
  //     //   logoUrl: logoPlaceHolder.src,
  //     //   url: "/sponsors/become-a-sponsor",
  //     //   description:
  //     //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
  //     // }, 
  //   ],
  // },

  {
    sponsorLevelName: "Bronze",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        nameKey: "bsponsorTitleKKTIX",
        logoUrl: kktix.src,
        url: "https://www.kktix.com/",
        descriptionKey: "bsponsorDescriptionKKTIX",
      },
      {
        nameKey: "bsponsorTitleONLYOFFICE",
        logoUrl: onlyoffice.src,
        url: "https://www.onlyoffice.com/",
        descriptionKey: "bsponsorDescriptionONLYOFFICE",
      },
      {
        nameKey: "bsponsorTitleQNAP",
        logoUrl: qnap.src,
        url: "https://www.qnap.com/zh-tw",
        descriptionKey: "bsponsorDescriptionQNAP",
      },
    ],
  },
  {
    sponsorLevelName: "Supporter",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "Andes Technology Corporation",
        logoUrl: andes.src,
        url: "https://www.andestech.com/en/",
        descriptionKey: "",
      },
    ],
  },
  {
    sponsorLevelName: "Special Thanks",
    sizeOnLargeScreen: 1,
    sizeOnMediumScreen: 1,
    sizeOnSmallScreen: 1,
    showPopup: true,
    list: [
      {
        name: "Department of Information Technology, Taipei City Government",
        logoUrl: doit.src,
        // partnerTag: "-Demo Partner",
        url: "https://doit.gov.taipei",
        descriptionKey: "",
      },
      {
        name: "SiFive",
        logoUrl: sifive.src,
        // partnerTag: "-Demo Partner",
        url: "https://www.sifive.com",
        descriptionKey: "",
      },
    ],
  },
];
