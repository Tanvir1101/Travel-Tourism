<!--header menu start-->
			<div class="header">
				<div class="header-menu">
					<div class="title"> <span>Hotel </span>Admin Panel</div>
					<div class="sidebar-btn">
					</div>
					<ul>
						<li><a href="{{route('hotel.profile')}}"><i class="fa fa-user-circle"></i></a></li>
						<li><a href="{{route('logout.index')}}"><i class="fas fa-sign-out-alt"></i></i></a></li>
					</ul>
				</div>
			</div>
			<!--header menu end-->
			<!--sidebar start-->
			<div class="sidebar">
				<div class="sidebar-menu">
					<center class="profile">
					<img src="{{asset('upload')}}/{{session('image')}}" alt="">
                        <p>{{session('uname')}}</p>
                    </center>

					<li class="item">
						<a href="{{route('hotel.index')}}" class="menu-btn">
							<i class="fas fa-home"></i><span>Home</span>
						</a>
					</li>
					<li class="item" id="profile">
						<a href="#profile" class="menu-btn">
							<i class="fab fa-buromobelexperte"></i><span>Facilities <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('hotel.addhotelfacility')}}"><i class="fas fa-image"></i><span>New Facilities</span></a>
							<a href="{{route('hotel.managehotelfacility')}}"><i class="fas fa-address-card"></i><span>Manage Facilities</span></a>
						</div>
					</li>
					<li class="item" id="room">
						<a href="#room" class="menu-btn">
							<i class="far fa-edit"></i><span>New Room <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('hotel.addhotelroom')}}"><i class="fas fa-envelope"></i><span>Add Room</span></a>
							<a href="{{route('hotel.managehotelroom')}}"><i class="fas fa-envelope-square"></i><span>Manage Room</span></a>
						</div>
					</li>
					<li class="item" id="booking">
						<a href="#booking" class="menu-btn">
							<i class="far fa-clipboard"></i><span>Booking <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('hotel.showhotelallboking')}}"><i class="fas fa-lock"></i><span>Booking List</span></a>
							<a href="{{route('hotel.ADroomBookList')}}"><i class="fas fa-language"></i><span>Manage Booking</span></a>
						</div>
					</li>
					<li class="item">
						<a href="{{route('hotel.checkhotelreview')}}" class="menu-btn">
							<i class="fas fa-comment"></i><span>Check Review</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('hotel.hoteltransactionhistory')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Transaction History</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('hotel.hotelsupport')}}" class="menu-btn">
							<i class="fa fa-envelope"></i><span>Support</span>
						</a>
					</li>


				</div>
			</div>
			<!--sidebar end-->