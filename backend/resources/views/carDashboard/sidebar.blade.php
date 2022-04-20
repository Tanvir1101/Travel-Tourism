<!--header menu start-->
			<div class="header">
				<div class="header-menu">
					<div class="title"><span> Car </span>Admin Panel</div>
					<div class="sidebar-btn">
					</div>
					<ul>
						<li><a href="{{route('car.profile')}}"><i class="fa fa-user-circle"></i></a></li>
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
						<a href="{{route('car.index')}}" class="menu-btn">
							<i class="fas fa-home"></i><span>Home</span>
						</a>
					</li>
					<li class="item" id="newcar">
						<a href="#newcar" class="menu-btn">
							<i class="far fa-edit"></i><span>New Car <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('car.addcar')}}"><i class="fas fa-envelope"></i><span>Add Car</span></a>
							<a href="{{route('car.managecar')}}"><i class="fas fa-envelope-square"></i><span>Manage Car</span></a>
						</div>
					</li>
					<li class="item">
						<a href="{{route('car.cartype')}}" class="menu-btn">
							<i class="fa fa-file-text"></i><span>Car Type</span>
						</a>
					</li>

					<li class="item" id="booking">
						<a href="#booking" class="menu-btn">
							<i class="far fa-clipboard"></i><span>Booking <i class="fas fa-chevron-down drop-down"></i></span>
						</a>
						<div class="sub-menu">
							<a href="{{route('car.showcarallbooking')}}"><i class="fas fa-lock"></i><span>Booking List</span></a>
							<a href="{{route('car.ADcarBookList')}}"><i class="fas fa-language"></i><span>Manage Booking</span></a>
						</div>
					</li>


					<li class="item">
						<a href="{{route('car.caravailability')}}" class="menu-btn">
							<i class="fas fa-check-square"></i><span>Availability</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('car.checkcarreview')}}" class="menu-btn">
							<i class="fas fa-comment"></i><span>Check Review</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('car.cartransactionhistory')}}" class="menu-btn">
							<i class="fas fa-money-check"></i><span>Transaction History</span>
						</a>
					</li>

					<li class="item">
						<a href="{{route('car.carsupport')}}" class="menu-btn">
							<i class="fa fa-envelope"></i><span>Support</span>
						</a>
					</li>
				</div>
			</div>
			<!--sidebar end-->