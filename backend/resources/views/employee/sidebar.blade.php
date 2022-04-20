			<!--header menu start-->
			<div class="header">
				<div class="header-menu">
					<div class="title">Employee <span> Dashboard</span></div>
					<div class="sidebar-btn">
					</div>
					<ul>
				    	<li><a href="{{route('employee.profile')}}"><i class="fa fa-user-circle"></i></i></a></li>
						<li><a href="{{route('logout.index')}}"><i class="fas fa-sign-out-alt"></i></i></a></li>
					</ul>
				</div>
			</div>
			<!--header menu end-->

			<!--sidebar start-->
			<div class="sidebar">
				<div class="sidebar-menu">
					<center class="profile">
					<img src="{{asset('upload/emp.png')}}" alt="">
                        <p>{{session('uname')}}</p>
                    </center>

					<li class="item">
						<a href="{{route('employee.index')}}" class="menu-btn">
							<i class="fas fa-home"></i><span>Dashboard</span>
						</a>
					</li>
				
					
					<li class="item">
						<a href="{{route('employee.userList')}}" class="menu-btn">
							<i class="fa fa-users" aria-hidden="true"></i><span>Users</span>
						</a>
					</li>


					<li class="item" id="packages">
						<a href="#packages" class="menu-btn">
							<i class="fa fa-gift"></i><span>Packages<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('employeePackage.packageAdd')}}"><i class="fas fa-plus-square"></i><span>Add Package</span></a>
							<a href="{{route('employeePackage.package')}}"><i class="fas fa-edit"></i><span>Manage Package</span></a>
						</div>
					</li>


					<li class="item" id="places">
						<a href="#places" class="menu-btn">
							<i class="fa fa-globe"></i><span>Places<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('employeePlace.placeAdd')}}"><i class="fas fa-map-marker-alt"></i><span>Add Place</span></a>
							<a href="{{route('employeePlace.place')}}"><i class="fas fa-edit"></i><span>Manage Place</span></a>
						</div>
					</li>

					<li class="item" id="gallery">
						<a href="#gallery" class="menu-btn">
						<i class="fas fa-camera-retro"></i><span>Gallery<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('employeeGallery.index')}}"><i class="fas fa-images"></i><span>Add Image</span></a>
							<a href="{{route('employeeGallery.manage')}}"><i class="fas fa-edit"></i><span>Manage Album</span></a>
						</div>
					</li>


					<li class="item" id="salary">
						<a href="#salary" class="menu-btn">
							<i class="fa fa-money"></i><span>Salary<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
						 	<a href="{{route('employeeSalary.salaryReq')}}"><i class="fas fa-coins"></i><span>Generate Salary</span></a>
							<a href="{{route('employeeSalary.salaryList')}}"><i class="fas fa-coins"></i><span>Salary List</span></a>
						</div>
					</li>


					<li class="item" id="accounts">
						<a href="#accounts" class="menu-btn">
							<i class="fa fa-credit-card"></i><span>Accounts<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('employee.addStatement')}}"><i class="fa fa-usd"></i><span>Add Income Statement</span></a>
							<a href="{{route('employee.statement')}}"><i class="fa fa-usd"></i><span>Income Statement</span></a>
							<a href="{{route('employee.addTransaction')}}"><i class="fa fa-money"></i><span>Add in Transaction History</span></a>
							<a href="{{route('employee.transaction')}}"><i class="fa fa-money"></i><span>Transaction History</span></a>
						</div>
					</li>



					<li class="item" id="ads">
						<a href="#ads" class="menu-btn">
							<i class="fas fa-ad"></i><span>Advertisement<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('employee.adsIndex')}}"><i class="fas fa-ad"></i><span>Advertisement</span></a>
							<a href="{{route('employee.promoIndex')}}"><i class="fas fa-paper-plane"></i><span>Send Promo</span></a>
						</div>
					</li>


					
					<li class="item">
						<a href="{{route('employeeReview.showReview')}}" class="menu-btn">
							<i class="fa fa-star" aria-hidden="true"></i><span>Review</span>
						</a>
					</li>



					<li class="item">
						<a href="{{route('employee.supportList')}}" class="menu-btn">
							<i class="fa fa-envelope" aria-hidden="true"></i><span>Support</span>
						</a>
					</li>

					

					<li class="item">
						<a href="{{route('employeeGuidelines.index')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Guidelines</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('employee.faq')}}" class="menu-btn">
							<i class="fas fa-question"></i></i><span>FAQ</span>
						</a>
					</li>

				</div>
			</div>
			<!--sidebar end-->

			<style>
				.wrapper .sidebar .sidebar-menu .item .menu-btn{
				  display: block;
				  color: #fff;
				  position: relative;
				  padding: 15px 20px;
				  transition: 0.3s;
				  transition-property: color;
				}
			</style>	

