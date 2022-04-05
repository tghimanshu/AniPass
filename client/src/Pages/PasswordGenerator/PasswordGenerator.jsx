import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Form,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import { generatePassword } from "../../Utils/passwordGenerator";

export const PasswordGenerator = () => {
  const [pass, setPass] = useState("");
  const [settings, setSettings] = useState({
    length: 8,
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: true,
    allowedSymbols: "@!*_-:=#/{}[]",
  });

  useEffect(() => {
    const pass = generatePassword(settings);
    setPass(pass);
  }, [settings]);

  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>Password Generator</Card.Title>
        </Card.Header>
        <Card.Body>
          <Alert
            variant={"dark"}
            className="d-flex justify-content-between align-items-center"
          >
            <CopyToClipboard text={pass}>
              <span className="fw-bold">{pass}</span>
            </CopyToClipboard>
            <CopyToClipboard text={pass}>
              <Button variant="light">
                <IoCopyOutline fontWeight={"bold"} fontSize={"1.2rem"} />
              </Button>
            </CopyToClipboard>
          </Alert>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Settings</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="d-flex justify-content-center align-items-center mb-2">
                    <Col xs={9}>
                      <Form.Range
                        min={5}
                        max={20}
                        label="Total Length"
                        value={settings.length}
                        onChange={(e) => {
                          const data = { ...settings };
                          data.length = e.target.value;
                          setSettings(data);
                        }}
                      />
                    </Col>
                    <Col xs={3}>
                      <Form.Control
                        value={settings.length}
                        onChange={(e) => {
                          const data = { ...settings };
                          data.length = e.target.value;
                          setSettings(data);
                        }}
                      />
                    </Col>
                  </Row>
                  <Form.Switch
                    size={"lg"}
                    label="Upper Case"
                    checked={settings.upperCase}
                    onChange={() => {
                      const check = { ...settings };
                      check.upperCase = !check.upperCase;
                      setSettings(check);
                    }}
                    className="mb-2"
                  />
                  <Form.Switch
                    size={"lg"}
                    label="Lower Case"
                    checked={settings.lowerCase}
                    onChange={() => {
                      const check = { ...settings };
                      check.lowerCase = !check.lowerCase;
                      setSettings(check);
                    }}
                    className="mb-2"
                  />
                  <Form.Switch
                    size={"lg"}
                    label="Numbers"
                    checked={settings.numbers}
                    onChange={() => {
                      const check = { ...settings };
                      check.numbers = !check.numbers;
                      setSettings(check);
                    }}
                    className="mb-2"
                  />
                  <Form.Switch
                    size={"lg"}
                    label="Symbols"
                    checked={settings.symbols}
                    onChange={() => {
                      const check = { ...settings };
                      check.symbols = !check.symbols;
                      setSettings(check);
                    }}
                    className="mb-2"
                  />
                  <Form.Control
                    disabled={!settings.symbols}
                    value={settings.allowedSymbols}
                    onChange={(e) => {
                      const check = { ...settings };
                      check.allowedSymbols = e.target.value;
                      setSettings(check);
                    }}
                    className="mb-2"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
