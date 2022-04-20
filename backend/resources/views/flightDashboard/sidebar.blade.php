<!--header menu start-->
<div class="header">
				<div class="header-menu">
					<div class="title"><span> Flight </span>Admin Panel</div>
					<div class="sidebar-btn">
					</div>
					<ul>
						<li><a href="{{route('flight.profile')}}"><i class="fa fa-user-circle"></i></a></li>
						<li><a href="{{route('logout.index')}}"><i class="fas fa-sign-out-alt"></i></a></li>

					</ul>
				</div>
			</div>
			<!--header menu end-->
			<!--sidebar start-->
			<div class="sidebar">
				<div class="sidebar-menu">
				
					<center class="profile">
                        <img src="{{asset('img/adminLogin.png')}}" alt="">
                        <p>{{session('uname')}}</p>
                    </center>

					<li class="item">
						<a href="{{route('flight.index')}}" class="menu-btn">
							<i class="fas fa-home"></i><span>Home</span>
						</a>
					</li>
					<li class="item" id="newcar">
						<a href="#newcar" class="menu-btn">
							<i class="far fa-edit"></i><span>New AirPlane <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('flight.addflight')}}"><i class="fas fa-envelope"></i><span>Add AirPlane</span></a>
							<a href="{{route('flight.manageflight')}}"><i class="fas fa-envelope-square"></i><span>Manage AirPlane</span></a>
						</div>
					</li>
					<li class="item">
						<a href="{{route('flight.flighttype')}}" class="menu-btn">
							<i class="fa fa-file-text"></i><span>Flight Type</span>
						</a>
					</li>

					<li class="item" id="booking">
						<a href="#booking" class="menu-btn">
							<i class="far fa-clipboard"></i><span>Booking <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('flight.showflightallbooking')}}"><i class="fas fa-lock"></i><span>Booking List</span></a>
							<a href="{{route('flight.ADflightBookList')}}"><i class="fas fa-language"></i><span>Manage Booking</span></a>
						</div>
					</li>


					<li class="item">
						<a href="{{route('flight.flightavailability')}}" class="menu-btn">
							<i class="fas fa-check-square"></i><span>Availability</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('flight.checkflightreview')}}" class="menu-btn">
							<i class="fas fa-comment"></i><span>Check Review</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('flight.flighttransactionhistory')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Transaction History</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('flight.flightsupport')}}" class="menu-btn">
							<i class="fa fa-envelope"></i><span>Support</span>
						</a>
					</li>
				</div>
			</div>
			<!--sidebar end-->
