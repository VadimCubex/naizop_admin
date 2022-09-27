import React, { useState } from "react";
import { useEffect } from "react";

import { Button } from "../../components/Button";
import { Filter } from "../../components/Filter";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { SvgIcon } from "../../components/SvgIcon";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { ServiceColumns, ServiceInfo, SortedBy } from "./constants";
import {
  IconsVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";

// import { Select } from "../../components/Select";

const Services = () => {
  const [sort, setSort] = useState(SortedBy[0]);
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
  const [isOpenAddService, setIsOpenAddService] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container services">
        <div className="services-tools">
          <div className="buttons">
            <Button
              onClick={() => setIsOpenAddService(true)}
              text="Add service"
            />
            <Button
              onClick={() => setIsOpenAddCategory(true)}
              text="Create category"
            />
          </div>
          <div className="import">
            <Text
              variant={TextVariants.subtitle_medium}
              className="cursor-pointer"
            >
              Import
            </Text>
            <Filter
              isShowSelect={true}
              options={SortedBy}
              selectValue={sort}
              setSelectValue={setSort}
              isShowButton={false}
              leftSide={<i className="fas fa-search"></i>}
              placeholder={"Search"}
            />
          </div>
        </div>
        <Table
          variant={TableVariants.Services}
          data={ServiceInfo}
          columnNames={ServiceColumns}
        />
        <Modal
          isOpen={isOpenAddCategory}
          onClick={() => setIsOpenAddCategory(false)}
          title="Create category"
        ></Modal>
        <Modal
          isOpen={isOpenAddService}
          onClick={() => setIsOpenAddService(false)}
          title="Add service"
          footer={
            <>
              <Button className="blue" text="Save changes" />
              <Button text="Close" />
            </>
          }
        >
          <div className="service-add">
            <div>
              <div className="name">
                <Text variant={TextVariants.subtitle_bold}>Service name</Text>
                <Text
                  className="language "
                  variant={TextVariants.subtitle_bold}
                >
                  English
                </Text>
              </div>
              <Text
                className="cursor-pointer"
                variant={TextVariants.subtitle_bold}
              >
                Show translations(1)
              </Text>
            </div>
            <Input />
          </div>
          <div className="service-add">
            <Text variant={TextVariants.subtitle_bold}>Category</Text>
            <Input
              placeholder="Choose category"
              rightSide={
                <SvgIcon
                  src={IconsVariants.DropDown_arrow_stroke}
                  size={20}
                  color={"#000"}
                />
              }
            />
          </div>
          <div className="mode">
            <div className="service-add">
              <Text variant={TextVariants.subtitle_bold}>Mode</Text>
              {/* Нужен селект */}
              <Input
                placeholder="Auto"
                rightSide={
                  <SvgIcon
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={20}
                    color={"#000"}
                  />
                }
              />
            </div>
            <div className="service-add">
              <Text variant={TextVariants.subtitle_bold}>Provider</Text>
              <Input
                placeholder="Choose provider"
                rightSide={
                  <SvgIcon
                    src={IconsVariants.DropDown_arrow_stroke}
                    size={20}
                    color={"#000"}
                  />
                }
              />
            </div>
          </div>
          <div className="service-add">
            <Text variant={TextVariants.subtitle_bold}>Rate per 1000</Text>
            <Input />
          </div>
          <div className="double">
            <div className="service-add">
              <Text variant={TextVariants.subtitle_bold}>Min order</Text>
              <Input />
            </div>
            <div className="service-add">
              <Text variant={TextVariants.subtitle_bold}>Max order</Text>
              <Input />
            </div>
          </div>
          <div className="service-add">
            <Text variant={TextVariants.subtitle_bold}>Increment</Text>
            <Input />
          </div>
          <div className="service-add">
            <Text variant={TextVariants.subtitle_bold}>Overflow, %</Text>
            <Input></Input>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Services;
