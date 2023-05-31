import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Dropdown,
  Table,
  Menu,
  Tag,
  Descriptions,
} from "antd";
import StatisticWidget from "components/shared-components/StatisticWidget";
import ChartWidget from "components/shared-components/ChartWidget";
import AvatarStatus from "components/shared-components/AvatarStatus";
import GoalWidget from "components/shared-components/GoalWidget";
import {
  VisitorChartData,
  AnnualStatisticData,
  ActiveMembersData,
  NewMembersData,
  RecentTransactionData,
} from "./DefaultDashboardData";
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from "constants/ChartConstant";
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import utils from "utils";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const MembersChart = (props) => <ApexChart {...props} />;

const memberChartOption = {
  ...apexLineChartDefaultOption,
  ...{
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors: [COLOR_2],
  },
};

const newJoinMemberOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusOutlined />
          <span className="ml-2">Add all</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <StopOutlined />
          <span className="ml-2">Disable all</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
    <a
      href="/#"
      className="text-gray font-size-lg"
      onClick={(e) => e.preventDefault()}
    >
      <EllipsisOutlined />
    </a>
  </Dropdown>
);

const tableColumns = [
  {
    title: "Customer",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar
          size={30}
          className="font-size-sm"
          style={{ backgroundColor: record.avatarColor }}
        >
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: "status",
    render: (_, record) => (
      <div className="text-right">
        <Tag
          className="mr-0"
          color={
            record.status === "Approved"
              ? "cyan"
              : record.status === "Pending"
              ? "blue"
              : "volcano"
          }
        >
          {record.status}
        </Tag>
      </div>
    ),
  },
];

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [activeMembersData] = useState(ActiveMembersData);
  const [newMembersData] = useState(NewMembersData);
  const [recentTransactionData] = useState(RecentTransactionData);
  const { direction } = useSelector((state) => state.theme);

  return (
    <>
      <Row gutter={16}>
        <Descriptions
          title="Information sur le patient"
          style={{
            backgroundColor: "white",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "15px",
            boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)",
          }}
        >
          <Descriptions.Item label={<b>Nom</b>}>Amoussou</Descriptions.Item>
          <Descriptions.Item label={<b>Prenoms</b>}>Brise</Descriptions.Item>
          <Descriptions.Item label={<b>Age</b>}>37 </Descriptions.Item>
          <Descriptions.Item label={<b>Adresse</b>}>
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label={<b>Email</b>}>
            agbessi558@gmail.com
          </Descriptions.Item>
          <Descriptions.Item label={<b>Telephone</b>}>
            +229 67 66 91 36
          </Descriptions.Item>
        </Descriptions>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card
            title="Données Médical"
            extra={cardDropdown(newJoinMemberOption)}
          >
            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>Sexe</div>
                <div>Masculain</div>
              </div>
            </div>
            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>hypertension</div>
                <div>Oui</div>
              </div>
            </div>

            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>maladies cardiaques</div>
                <div>Non</div>
              </div>
            </div>

            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>Fumeur</div>
                <div>Non</div>
              </div>
            </div>

            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>L'IMC (indice de masse corporelle)</div>
                <div>98</div>
              </div>
            </div>
            <div className="mt-3">
              <div
                className={`d-flex align-items-center justify-content-between mb-4`}
              >
                <div>Le taux d'HbA1c</div>
                <div>8.0</div>
              </div>
            </div>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          style={{
            backgroundColor: "rgba(62, 121, 247, 15%)",
            boxShadow: "1px 3px 10px 0px rgba(0,0,0,0.75)",
            padding: "10px",
          }}
        >
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Col lg={8}>
              <GoalWidget
                title="Probalite d'etre Negatif"
                value={20}
                subtitle="La probabilite que le patient a de ne pas avoir le diabettes"
              />
            </Col>

            <Col lg={8}>
              <GoalWidget
                title="Probalite d'etre Positif"
                value={80}
                subtitle="La probabilite que le patient a d'avoir le diabettes"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default withRouter(DefaultDashboard);
