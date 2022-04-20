			<!--header menu start-->
			<div class="header">
				<div class="header-menu">
					<div class="title">Admin <span>Panel</span></div>
					<div class="sidebar-btn">
					</div>
					<ul>
						<li>{{date("l jS \of F")}}</li>
						<li><a href="{{route('admin.profile')}}"><i class="fa fa-user-circle"></i></a></li>
						<li><a href="{{route('logout.index')}}"><i class="fas fa-sign-out-alt"></i></a></li>
					</ul>
				</div>
			</div>
			<!--header menu end-->

			<!--sidebar start-->
			<div class="sidebar">
				<div class="sidebar-menu">
					<center class="profile">
                        <!--<img src="{{asset('img/adminLogin.png')}}" alt="">-->
                        <img src="{{asset('upload')}}/{{session('image')}}" height="50px" width="50px" alt=>
                        <p>{{session('uname')}}</p>
						
						
                    </center>
					<br>

					<li class="item">
						<a href="{{route('admin.index')}}" class="menu-btn">
							<i class="fas fa-home"></i><span>Dashboard</span>
						</a>
					</li>

					<li class="item" id="admin">
						<a href="#admin" class="menu-btn">
							<i class="fa fa-briefcase"></i><span>Admin<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('admin.adminAdd')}}"><i class="fa fa-puzzle-piece"></i><span>Add Admin</span></a>
							<a href="{{route('admin.adminList')}}"><i class="fa fa-list"></i><span>Admin List</span></a>
						</div>
					</li>

					<li class="item" id="user">
						<a href="#user" class="menu-btn">
							<i class="fa fa-users"></i><span>User<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('adminUser.userList')}}"><i class="fa fa-puzzle-piece"></i><span>User list</span></a>
							<a href="{{route('adminUser.activeUserList')}}"><i class="fa fa-list"></i><span>Active User list</span></a>
						</div>
					</li>

					<li class="item" id="emp">
						<a href="#emp" class="menu-btn">
							<i class="fa fa-briefcase"></i><span>Employee<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('adminEmployee.employeeAdd')}}"><i class="fa fa-puzzle-piece"></i><span>Add Employee</span></a>
							<a href="{{route('adminEmployee.employeeList')}}"><i class="fa fa-list"></i><span>Employee List</span></a>
							<a href="{{route('adminEmployee.activeEmployeeList')}}"><i class="fa fa-list"></i><span>Active Employee List</span></a>
						</div>
					</li>
					<li class="item" id="hotel">
						<a href="#hotel" class="menu-btn">
							<i class="fa fa-bed"></i><span>Hotel<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('adminHotel.adHotel')}}"><i class="fa fa-check-square"></i><span>Approve/Decline</span></a>
							<a href="{{route('adminHotel.hotelList')}}"><i class="fa fa-list"></i><span>All Hotels</span></a>
							<a href="{{route('adminHotel.hotelBookings')}}"><i class="fa fa-clipboard"></i><span>Hotel Bookings</span></a>
						</div>
					</li>
					<li class="item" id="transport">
						<a href="#transport" class="menu-btn">
							<i class="fa fa-car"></i><span>Transport<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('adminTransport.adTransport')}}"><i class="fa fa-check-square"></i><span>Approve/Decline</span></a>
							<a href="{{route('adminTransport.carList')}}"><i class="fa fa-list"></i><span>All Car Companies</span></a>
							<a href="{{route('adminTransport.flightList')}}"><i class="fa fa-list"></i><span>All Flight Companies</span></a>
							<a href="{{route('adminTransport.carBookingList')}}"><i class="fa fa-clipboard"></i><span>Car Bookings</span></a>
							<a href="{{route('adminTransport.flightBookingList')}}"><i class="fa fa-clipboard"></i><span>Flight Bookings</span></a>
						</div>
					</li>

					<li class="item" id="package">
						<a href="#package" class="menu-btn">
							<i class="fa fa-gift"></i><span>Packages<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('AdminPackage.adPackage')}}"><i class="fa fa-check-square"></i><span>Approve/Decline</span></a>
							<a href="{{route('AdminPackage.packageList')}}"><i class="fa fa-list"></i><span>All Packages</span></a>
							<a href="{{route('AdminPackage.packageBookingList')}}"><i class="fa fa-clipboard"></i><span>Package Bookings</span></a>
							<a href="{{route('AdminPackage.packageStatus')}}"><i class="fa fa-pencil-square"></i><span>Package Status</span></a>
						</div>
					</li>

					<li class="item" id="place">
						<a href="#place" class="menu-btn">
							<i class="fa fa-globe"></i><span>Places<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('AdminPlace.adPlace')}}"><i class="fa fa-check-square"></i><span>Approve/Decline</span></a>
							<a href="{{route('AdminPlace.placeList')}}"><i class="fa fa-list"></i><span>All Places</span></a>
						</div>
					</li>

					<li class="item" id="accounts">
						<a href="#accounts" class="menu-btn">
							<i class="fa fa-credit-card"></i><span>Accounts<i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('AdminAccounts.income')}}"><i class="fa fa-usd"></i><span>Income Statement</span></a>
							<a href="{{route('AdminAccounts.transaction')}}"><i class="fa fa-money"></i><span>Transaction History</span></a>
							<a href="{{route('AdminAccounts.salary')}}"><i class="fa fa-check-square"></i><span>Approve/Decline Salary</span></a>
						</div>
					</li>

					<li class="item">
						<a href="{{route('AdminSupport.index')}}" class="menu-btn">
							<i class="fa fa-envelope" aria-hidden="true"></i><span>Support</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('adminPolicy.index')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Policies</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('adminGuidelines.index')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Guidelines</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('adminAbout.index')}}" class="menu-btn">
							<i class="fa fa-address-card"></i><span>About Us</span>
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

