import './EditItem.css'
import React, {Component} from 'react'
import {Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
class AddItem extends Component{
	constructor(props) {
		super(props);
		this.index=""
		this.url=""
		this.state = {
		  validated: false,
		  textName: "",
		  textType: "",
		  textColor: "",
		  txtBattery:"",
		  txtMemory:"",
		  txtRom: "",
		  txtOs:"", 
		  txtDisplaySize:"", 
		  txtChip:"", 
		  txtInStock:"",
		  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  image4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzuDh9Fdpo9ntG5_YunFM2Wd_g_Kt4CyR8Q&usqp=CAU",
		  
			Id_Discount : "",
			Price :""
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	      }
		  
		handleSubmit =(event)=> {
		      const form = event.currentTarget;
		      if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
		      }  
		      this.setState({validated: true});
			  if(this.state.textName&&this.state.textType&&this.state.textColor&&this.state.txtBattery&&this.state.txtMemory&&this.state.txtOs&&this.state.txtRom&&this.state.txtDisplaySize&&this.state.txtChip&&this.state.txtInStock){
					let txtMemory = this.state.txtMemory;
					let tableMemory; 
					if(this.state.txtRom.split(', ').length==0){
						let arr = this.state.txtRom.split(' - ');
						tableMemory = {
							Id : 1,
							Rom_Capacity: parseInt(arr[0]),
							Ram_Capacity : parseInt(txtMemory),
							Price : parseInt(arr[1])
						}
					}else{
						tableMemory = this.state.txtRom.split(', ').map(function(rom,index){
							let arr = rom.split(' - ');
							return {
								Id : index+1,
								Rom_Capacity: parseInt(arr[0]),
								Ram_Capacity : parseInt(txtMemory),
								Price : parseInt(arr[1])
							}
						})

					}
				
				const res = axios.post('http://localhost:8080/product/add', {
					product:{
						Product_Type: this.state.textType,
						Product_Name: this.state.textName,
						Color: this.state.textColor,
						Discount: 0,
						battery: this.state.txtBattery,
						Os: this.state.txtOs,
						DisplaySize: this.state.txtDisplaySize, 
						chip: this.state.txtChip,
						InStock: parseInt(this.state.txtInStock)
					},
					image:[
						{
							Id : 1,
							Url : this.state.image
						},
						{
							Id : 2,
							Url : this.state.image1
						},
						{
							Id : 3,
							Url : this.state.image2
						},
						{
							Id : 4,
							Url : this.state.image3
						},

						{
							Id : 5,
							Url : this.state.image4
						}

					],
					discountCode:[
						{
							Id_Discount : this.state.Id_Discount,
							Price : (this.state.Price)? parseInt(this.state.Price) : ""
						}
					],
					// 512 - 20000000, 128 - 15000000
					memory: tableMemory
				}) 
				.then(function (response) {
					if(res.data){
						toast.success('Th??m s???n ph???m th??nh c??ng :)', {
							position: "top-right",
							autoClose: 700,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
						});
						setTimeout(()=>{window.location.href = "/managerItem"},600)
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		};

	    handleInputChange(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
			[name]: value
			});
	     	 };

		On_click=(e)=>{
			const target = e.target;
			const name = target.name;
			this.index= name;
		  document.getElementById("openmodal").click()
	  	}
	render() {

	return(
		<div class='container-fluid' id='product-list'>
		{/* <Header/> */}
		
		<div class ='row' style={{backgroundColor:"#EAEAEA"}}>
		<div class="col-md-8 col-sm-12" style={{margin:'auto'}} >
		<Form noValidate validated={this.state.validated}>
		<div class ='row' style={{marginTop:'5px'}}>
		<h4 class="text-center">Th??ng tin s???n ph???m</h4>
			<div class="col-md-7 col-sm-12">
				<Form.Group  controlId="validationCustom03" style={{margin:'0 0 2px'}}>
				<Form.Label>T??n s???n ph???m</Form.Label>
				<Form.Control type="text" placeholder="T??n s???n ph???m" style={{borderRadius:'9px'}} name="textName" value={this.state.textName} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Please provide a valid city.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Lo???i</Form.Label>
				<Form.Control type="text" placeholder="Nh???p h??ng s???n ph???m" style={{borderRadius:'9px'}} name="textType" value={this.state.textType} onChange={this.handleInputChange} required />
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>M??u</Form.Label>
				<Form.Control type="text" placeholder="Nh???p m??u 1, m??u 2,.." style={{borderRadius:'9px'}} required name="textColor" value={this.state.textColor} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nh???p dung l?????ng pin</Form.Label>
				<Form.Control type="text" placeholder="Nh???p dung l?????ng pin" style={{borderRadius:'9px'}}  name="txtBattery" value={this.state.txtBattery} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Dung l?????ng b??? nh??? - Gi??</Form.Label>
				<Form.Control type="text" placeholder="<dung l?????ng 1 - gi??>,..." style={{borderRadius:'9px'}} required name="txtRom" value={this.state.txtRom} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Nh???p dung l?????ng ram</Form.Label>
				<Form.Control type="number" placeholder="Nh???p dung l?????ng ram" style={{borderRadius:'9px'}}  name="txtMemory" value={this.state.txtMemory} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>H??? ??i???u h??nh</Form.Label>
				<Form.Control type="text" placeholder="Nh???p h??? ??i???u h??nh" style={{borderRadius:'9px'}} required name="txtOs" value={this.state.txtOs} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>K??ch th?????c m??n h??nh</Form.Label>
				<Form.Control type="text" placeholder="Nh???p k??ch th?????c m??n h??nh" style={{borderRadius:'9px'}} required name="txtDisplaySize" value={this.state.txtDisplaySize} onChange={this.handleInputChange}/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>
				
				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Chip</Form.Label>
				<Form.Control type="text" placeholder="Nh???p chip" style={{borderRadius:'9px'}} required name="txtChip" value={this.state.txtChip} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>S??? l?????ng</Form.Label>
				<Form.Control type="number" placeholder="Nh???p s??? l?????ng" style={{borderRadius:'9px'}} required name="txtInStock" value={this.state.txtInStock} onChange={this.handleInputChange}required/>
				<Form.Control.Feedback type="invalid">
					Ph???n n??y kh??ng ???????c ????? tr???ng.
				</Form.Control.Feedback>
				</Form.Group>

				<Form.Group  controlId="validationCustom03"style={{margin:'10px 0 2px'}}>
				<Form.Label>Th??ng tin m?? gi???m gi??</Form.Label>
				<div class="row">
					<div class="col-md-6 col-sm-6">
					<div class="input-group mb-3">
						<span class="input-group-text">Code</span>
						<input type="text" class="form-control" name="Id_Discount" value={this.state.Id_Discount} onChange={this.handleInputChange}/>
					</div>
					</div>
					<div class="col-md-6 col-sm-6">
					<div class="input-group mb-3">
						<span class="input-group-text">Gi??</span>
						<input type="number" class="form-control" name="Price" value={this.state.Price} onChange={this.handleInputChange}/>
					</div>
					</div>
				</div>
				</Form.Group>
		
			</div>
			<div class="col-md-5 col-sm-12 " style={{marginTop:'30px'}}>
				{/* <input type="file" style={{display:'none'}} accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" 
				onChange={this.imageHandler} id="chosefile"
          			ref={fileInput => this.fileInput=fileInput}/> */}
				<button type="button" data-bs-toggle="modal" data-bs-target="#myModal" id="openmodal" style={{display:'none'}}>Open modal</button>
				<div class ='row'>
				<div class="col-md-9 col-sm-9 col-9 mw-100" style={{margin:'auto'}}>
					<img class="img-fluid" src={this.state.image} name ="image" onClick={this.On_click}/>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 col-11" style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
				<div class ='row mt-3'>
				<div class="col-md-11 col-sm-11 col-11" style={{margin:'auto'}}>
					<div class ='row'>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image3} name ="image3" onClick={this.On_click}/>
						</div>
						<div class="col-md-6 col-6">
						<img class="img-fluid" src={this.state.image4} name ="image4" onClick={this.On_click}/>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-end container mt-3">
		<Button type="button" variant="success" onClick={this.handleSubmit}>Th??m s???n ph???m</Button>
		<button type="button" class="btn btn-success" id="exit"  onClick={()=>{window.location.href = "/managerItem"}}>H???y</button>
		</div>
		</Form>
		{/* <!-- The Modal --> */}
		<div class="modal fade" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">

			{/* <!-- Modal Header --> */}
			<div class="modal-header">
				<h4 class="modal-title">Nh???p ???????ng d???n h??nh ???nh</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
			</div>

			{/* <!-- Modal body --> */}
			<div class="modal-body">
				<input type="text" class="form-control" placeholder="???????ng d???n h??nh ???nh" name="url" 
				// onChange={(e)=>{this.url= e.target.value}}
				onKeyUp={(even) => {
					if (even.key === "Enter") {
						even.preventDefault();
						document.getElementById('OKButton').click()
					}
					else this.url= even.target.value
				}}/>
			</div>

			{/* <!-- Modal footer --> */}
			<div class="modal-footer">
				{/* <button type="button" class="btn btn-primary" onClick={this.indexImage} data-bs-dismiss="modal">Ch???n file</button> */}
				<button type="button" class="btn btn-success" onClick={(e)=>{
					const indexImage =this.index;
						if(this.url!==''){
							this.setState({
								[indexImage]: this.url
							});
						}
					}} 
				data-bs-dismiss="modal" id='OKButton'>OK</button>
				<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
			</div>

			</div>
		</div>
		</div>
		</div>
		</div>
		{/* <Footer/> */}
		</div>
	);
	}
}

export default AddItem;