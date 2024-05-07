import React, { SyntheticEvent } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
type Props = {};

const Home = (props: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const selectedLang = window.localStorage.getItem("lng");
  const changeLanguage = (e: any) => {
    window.localStorage.setItem("lng", e.target.value);
    router.reload();
  };
  return (
    <div className='flex flex-col justify-center items-center max-w-[350px] text-center'>
      <div className='absolute top-5 right-4'>
        <form className=' flex flex-col justify-start items-start'>
          {/* <label
            htmlFor='language'
            className='block mb-1 text-sm font-medium text-gray-900 '
          >
            {t("select.language")}
          </label> */}
          <select
            onChange={(e) => changeLanguage(e)}
            id='language'
            className='bg-rose-50 w-24 border-transparent shadow-md text-gray-900 text-sm focus:ring-rose-500 focus:border-rose-500 py-2 px-1'
          >
            <option value='en' selected={selectedLang === "en"}>
              {t("english")}
            </option>
            <option value='tr' selected={selectedLang === "tr"}>
              {t("turkish")}
            </option>
          </select>
        </form>
      </div>
      <Icon
        icon='line-md:heart-filled'
        className='text-rose-600'
        fontSize={"4rem"}
      />
      <h1 className=' text-2xl mt-2'>{t("title")}</h1>
      <hr className='bg-green-600 flex-1 w-full my-4' />
      <div className='flex flex-col justify-start items-start w-full'>
        <h2 className='mb-2 text-lg'>{t("content")}</h2>
        <ul className='list-disc pl-5 text-start'>
          <li>
            <a
              href='https://redux-toolkit.js.org/'
              className='hover:text-rose-600 font-semibold'
            >
              @reduxjs/toolkit:
            </a>
            <span className='ml-1'>{t("stage.management")}</span>
          </li>
          <li>
            <a
              href='https://react.i18next.com/'
              className='hover:text-rose-600 font-semibold'
            >
              react-i18n:
            </a>
            <span className='ml-1'>{t("localization")}</span>
          </li>
          <li>
            <a
              href='https://tailwindcss.com/'
              className='hover:text-rose-600 font-semibold'
            >
              Tailwindcss:
            </a>
            <span className='ml-1'>{t("css.library")}</span>
          </li>
          <li>
            <a
              href='https://iconify.design/'
              className='hover:text-rose-600 font-semibold'
            >
              Iconify:
            </a>
            <span className='ml-1'>{t("icon.library")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
