import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import '../CSS/invoice.css';
// import i18next from 'i18next';
// import SelectLanguage from '../Selectlanguage/SelectLanguage';
import strings from './lan';
// import ''
const Bill=()=> {
  var d = new Date();

  const datestring =d.getDate() +'-' +(d.getMonth() + 1) +'-' +d.getFullYear() +' ' + d.getHours() +':' + d.getMinutes();

  const [status, setStatus] = useState(false);
  const [bill, setBill] = useState(false);
  const [show, setShow] = useState(false);
  const [discount, setdiscount] = useState(false);
  const [dstatus, setdstatuts] = useState(false);
  const [discountprice, setdiscountprice] = useState(0);
  const handleClose = () => setShow(false);
  const [Pstatus, setPstastus] = useState(false);
  const [item, setItem] = useState(1);
  const [quentity, setQuentity] = useState(1);
  const [discountOnchangeAmount, setdiscountOnchangeAmount] = useState('');
  const [lan, setlan] = useState('en');



  const [person, setPerson] = useState({
    name: '',
    address: '',
    number: '',
    gstnumber: '',
    billno: Math.random().toString().substr(9, 4),
    date: datestring,
    products: [],
  });
  const [product, setProduct] = useState({
    product: '',
    price: '',
    qty: quentity,
  });
  const [validation, setvalidatioin] = useState({
    nameerror: '',
    addresserror: '',
    numbererror: '',
    gsterror: '',
    itemnameerror: '',
    itempriceerror: '',
    saveError:''
  });
  const addHandler = () => {
    setShow(true);
  };

  const incrementQuentity = () => {
    setQuentity(quentity + 1);
    setProduct({
      ...product,
      qty: product.qty + 1,
    });
  };
  const decrementQuentity = () => {
    if (quentity > 1) {
      setQuentity(quentity - 1);
      setProduct({
        ...product,
        qty: product.qty - 1,
      });
    }
  };
  const Onchange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
    setvalidatioin({
      nameerror: '',
      addresserror: '',
      numbererror: '',
      gsterror: '',
      itemnameerror: '',
      itempriceerror: '',
      discounterror: '',
    });
  };

  ///////////////save data
  const saveData = () => {
    if (person.name === '') {
      setvalidatioin({
        nameerror: `${strings.Enter_Name}`,
        addresserror: `${strings.Enter_Address}`,
        numbererror: `${strings.Enter_Mobile_NO}`,
        gsterror: `${strings.Enter_GSt}`,
        itemnameerror: `${strings.Enter_Item_Name}`,
        itempriceerror: `${strings.Enter_Item_Price}`,
      });
    } else if (person.name === '') {
      setvalidatioin({ nameerror: `${strings.Enter_Name}` });
    } else if (person.address === '') {
      setvalidatioin({ addresserror: `${strings.Enter_Address}`});
    } else if (person.number === '') {
      setvalidatioin({ numbererror: `${strings.Enter_Mobile_NO}` });
    } else if (person.gstnumber === '') {
      setvalidatioin({ gsterror: `${strings.Enter_GSt}` });
    } else if (product.product === '') {
      setvalidatioin({ itemnameerror: `${strings.Enter_Item_Name}` });
    } else if (product.price === '') {
      setvalidatioin({ itempriceerror: `${strings.Enter_Item_Price}` });
    } else {
      if(Pstatus){
      setShow(false);
      setBill(true);
      setStatus(true);
      }else {
        setvalidatioin({saveError:`${strings.SAVE_BTN}`})
      }
    }
  };
  /////////////////////
  const iteam = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setvalidatioin({
      nameerror: '',
      addresserror: '',
      numbererror: '',
      gsterror: '',
      itemnameerror: '',
      itempriceerror: '',
    });
  };

  const additem = () => {
    setProduct({
      product: '',
      price: '',
      qty: '',
    });
    setQuentity(1);
    setItem(item + 1);
  };
  var totalprice = 0;
  let mult = 0;
  {
    person &&
      person.products.map((data) => {
        mult = parseInt(data.qty) * parseInt(data.price);
        totalprice += mult;
      });
  }

  const discountamt = () => {
    setdiscount(true);
  };

  let dprice = 0;
  const donchange = (e) => {
    dprice = totalprice - e.target.value;
    setdiscountOnchangeAmount(e.target.value)
    setdiscountprice(dprice);
    setvalidatioin({
      discounterror: '',
    });
  };
  const handleCloseDiscount = () => {
    if (discountprice > 0) {
      setdiscount(false);
      setdstatuts(true);
    } else if(discountOnchangeAmount >=totalprice){
      setvalidatioin({
        discounterror: `${strings.Discount_Error}`,
      });
    }else{
      setvalidatioin({
        discounterror: `${strings.Discount_Error_2}`,
      });
    }
  };

  const SaveProduct = () => {
    setvalidatioin({saveError:""})
    setPerson({
      ...person,
      products: [...person.products, product],
    });
    setPstastus(true)
  };
  const languages=(e)=>{
      setlan(e.target.value)
  }
 
const closediscount=()=>{
  setdiscount(false)
}
const Print=()=>{
  window.print()
}

  strings.setLanguage(lan)
  return (
    <div>
      {status == false && (
        <Button variant="primary" align="center" onClick={() => addHandler()}>
          Add Bill
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal_tital">
            {strings.ADD_DETAILS}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
      <legend>{strings.Customer_info}</legend>
      <div className="row ml-1">
            <select
            className="btn btn-info"
              onChange={(e) => {
                languages(e);
              }}
            >
              <option disabled selected>
            {strings.Select_Language}{' '}
              </option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gj">Gujrati</option>

            </select>
            </div><br/>
            <div id="myTabContent ">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder={strings.Enter_Name}
                        onChange={(e) => {
                          Onchange(e);
                        }}
                      />
                      {!validation.nameerror == '' && (
                        <p style={{ color: 'red' }}>{validation.nameerror}</p>
                      )}
                    </div>

                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="address"
                        placeholder={strings.Enter_Address}
                        onChange={(e) => {
                          Onchange(e);
                        }}
                      ></textarea>
                      {!validation.addresserror == '' && (
                        <p style={{ color: 'red' }}>
                          {validation.addresserror}
                        </p>
                      )}
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        minlength="10"
                        maxlength="10"
                        name="number"
                        class="form-control"
                        onChange={(e) => {
                          Onchange(e);
                        }}
                        placeholder={strings.Enter_Mobile_NO}
                      />
                      {!validation.numbererror == '' && (
                        <p style={{ color: 'red' }}>{validation.numbererror}</p>
                      )}
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="gstnumber"
                        class="form-control"
                        onChange={(e) => {
                          Onchange(e);
                        }}
                        placeholder={strings.Enter_GSt}
                      />
                      {!validation.gsterror == '' && (
                        <p style={{ color: 'red' }}>{validation.gsterror}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <legend>
              {strings.Product_info}
              <Button
                variant="dark"
                className="additem"
                onClick={() => {
                  additem();
                }}
              >
                {strings.ADD_item}
              </Button>
            </legend>
            <h5>{strings.Item} {item}</h5>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="product"
                    value={product.product}
                    onChange={(e) => {
                      iteam(e);
                    }}
                    placeholder={strings.Enter_Item_Name}
                  />
                  {!validation.itemnameerror == '' && (
                    <p style={{ color: 'red' }}>{validation.itemnameerror}</p>
                  )}
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="price"
                    value={product.price}
                    onChange={(e) => {
                      iteam(e);
                    }}
                    placeholder={strings.Enter_Item_Price}
                  />
                  {!validation.itempriceerror == '' && (
                    <p style={{ color: 'red' }}>{validation.itempriceerror}</p>
                  )}
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div className="col-4">
                <Button
                  className="ml-1 mr-2"
                  onClick={() => incrementQuentity()}
                >
                  +
                </Button>
                {quentity}
                <Button className="ml-2" onClick={() => decrementQuentity()}>
                  -
                </Button>
              </div>
              <div className="col-6">
                <Button
                  variant="success"
                  className="Sbutton"
                  onClick={() => {
                    SaveProduct();
                  }}
                >
                  {strings.Save_Product}
                </Button>
                {!validation.saveError == '' && (
                    <p style={{ color: 'red' }}>{validation.saveError}</p>
                  )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {strings.ClOSE}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveData();
            }}
          >
           {strings.SAVE}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        {bill && (
          <Card>
            <Card.Header className="header">
             
        <h1>{strings.BLUESOFT}</h1>
              <h8>
                {strings.A1} <br />
                {strings.A2}
                <br />
                {strings.A3}
              </h8>
           
            </Card.Header>

            <Card.Body>
              {/* <Card.Title></Card.Title> */}
              <Card.Text>
                <div className="row">
                  <div className="col-4">
                 <h5>{strings.Billed_To}</h5>
                    <p>
                      {person.name}
                      <br />
                      <p>
                        {person.address}
                        <br />
                        <p>{person.gstnumber}</p>
                      </p>
                    </p>
                  </div>
                  <div className="col-4">
               <h5>{strings.Invoice_Number}</h5>
                    <p>{person.billno}</p>
                   <h6>{strings.Date}</h6>
                    <p>{person.date}</p>
                  </div>
                  <div align="right" className="col-4">
                <h5>{strings.Invoice_Total}</h5>

                    {dstatus ? (
                      <h1 className="dpricecolour">
                        <b>&#x20B9;{discountprice}</b>
                      </h1>
                    ) : (
                      <h1 className="dpricecolour">
                        <b>&#x20B9;{totalprice}</b>
                      </h1>
                    )}
                  </div>
                </div>
                <hr color="#039dfc" />

                <table style={{ border: '2px solid black', width: '100%' }}>
                  <thead>
                    <tr>
                      <th>{strings.Product} </th>
                    <th>{strings.Cost}</th>
                    <th>{strings.Quentity}</th>
                    <th>{strings.Amount}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {person.products.map((item) => {
                      return (
                        <tr align="left">
                          <td>{item.product}</td>
                          <td>&#x20B9;{item.price}</td>
                          <td>{item.qty}</td>
                          <td>
                            &#x20B9;{parseInt(item.price) * parseInt(item.qty)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div >
                  <button
                  className="discount"
                    // style={{ marginLeft: '0px ' }}
                    onClick={() => {
                      discountamt();
                    }}
                  >
                  {strings.Discount}
                  </button>
                </div>
                <hr color="#039dfc" />
                <div className="row">
                  <div align="left" className="col-4">
                  </div>
                  <div align="right" className="abc col-6">
                  <h6>{strings.Sub_Total}</h6>
                    <h6>{strings.Tax}:</h6>
                    <h6>{strings.Total}:</h6>
                    {!discountOnchangeAmount=='' && <h6>{strings.Discount}:</h6>}
                    
                  </div>
                  <div align="left" className="col-2">
                    <p>
                      <b>
                        &#x20B9;{totalprice}
                        <br />
                        &#x20B9;0 <br />
                        &#x20B9;{totalprice}<br/>
                       { !discountOnchangeAmount=='' &&   <>&#x20B9;{discountOnchangeAmount}</>}
                      </b>
                    </p>
                  </div>
                </div>
                <br />

                <div className="row">
                  <div align="left" className="col-4">
                    <p>
                      {strings.Invoice_Terms}
                      <br />
                  <b>{strings.In_Text}</b>
                    </p>
                  </div>
                  <div align="right" className="abc col-6">
                    <h6>{strings.Amount_Due}:</h6>
                  </div>
                  <div align="left" className="col-2">
                    {dstatus ? (
                      <p>
                        <b>&#x20B9;{discountprice}</b>
                      </p>
                    ) : (
                      <p>
                        <b>&#x20B9;{totalprice}</b>
                      </p>
                    )}
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>

      <Modal show={discount} onHide={closediscount}>
        <Modal.Header closeButton>
                    <Modal.Title>{strings.Discount}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="number"
              onChange={(e) => {
                donchange(e);
              }}
            ></input>
            {!validation.discounterror == '' && (
              <p style={{ color: 'red' }}>{validation.discounterror}</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closediscount}>
            {strings.ClOSE}
          </Button>
          <Button variant="primary" onClick={handleCloseDiscount}>
            {strings.SAVE}
          </Button>
        </Modal.Footer>
      </Modal>
      { bill  && <button onClick={()=>{Print()}}>Print</button>}

    </div>
  );
}

export default Bill;
