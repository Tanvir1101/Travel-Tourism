<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="{{asset('css/style.css')}}">
	<link rel="stylesheet" href="{{asset('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')}}">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Tour</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />

  <!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">

	<!-- Flexslider  -->
	<link rel="stylesheet" href="css/flexslider.css">

	<!-- Owl Carousel -->
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	
	<!-- Date Picker -->
	<link rel="stylesheet" href="css/bootstrap-datepicker.css">
	<!-- Flaticons  -->
	<link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="css/style.css">

	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body>
		
	<div class="colorlib-loader"></div>

	<div id="page">
		<nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-2">
							<div id="colorlib-logo"><a href="{{route('user.home')}}">Tour</a></div>
						</div>
						<div class="col-xs-10 text-right menu-1">
							<ul>
								<li class="active"><a href="{{route('user.home')}}">Home</a></li>
								<li class="has-dropdown">
									<a href="#">Booking</a>
									<ul class="dropdown">
										<li><a href="{{route('userFlight.index')}}">Flight</a></li>
										<li><a href="{{route('userHotel.index')}}">Hotels</a></li>
										<li><a href="{{route('userCar.index')}}">Car</a></li>
									</ul>
								</li>
								<li class="has-dropdown">
									<a href="#">Service</a>
									<ul class="dropdown">
										<li><a href="{{route('userDestination.showdestination')}}">Destination</a></li>
										<li><a href="{{route('userPackage.showPackage')}}">Packages</a></li>
										<li><a href="{{route('userHotels.showHotel')}}">Hotels</a></li>
										<li><a href="{{route('userFlightList.showFlightList')}}">Flight</a></li>
										<li><a href="{{route('userCarList.showCarList')}}">Car</a></li>
									</ul>
								</li>
								<li><a href="{{route('userTravelHistory.index')}}">Travel History</a></li>
								<li><a href="{{route('userGuideline.showGuideline')}}">Travel Guideline</a></li>
								<li><a href="{{route('userNotification.index')}}">Noification</a></li>
								<li class="has-dropdown">
									<a href="#">About</a>
									<ul class="dropdown">
										<li><a href="{{route('userAbout.index')}}">About Us</a></li>
										<li><a href="{{route('userContact.index')}}">Contact Us</a></li>
										<li><a href="{{route('userPrivacy.index')}}">Privacy Policy</a></li>
										<li><a href="{{route('userFaq.index')}}">FAQ</a></li>
									</ul>
								</li>
								<li><a href="{{route('userReview.index')}}">Review</a></li>
								<li><a href="{{route('userProfile.userprofile')}}">{{session('uname')}}</a></li>
								<li><a href="{{route('logout.index')}}">LogOut</i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
		
		<aside id="colorlib-hero">
			<div class="flexslider">
				<ul class="slides">
			   	<li style="background-image: url({{asset('img/cox_bazar.jpg')}});">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
				   				<div class="slider-text-inner text-center">
				   					<h2>Enjoy the longest Sea Beach</h2>
				   					<h1>Cox's Bazar</h1>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style="background-image: url({{asset('img/sundarban5.jpg')}});">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
				   				<div class="slider-text-inner text-center">
				   					<h2>Get blown by the exotic animals of</h2>
				   					<h1>Sundarban</h1>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style="background-image: url({{asset('img/sylhet_tea.jpg')}});">
			   		<div class="overlay"></div>
			   		<div class="container-fluids">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
				   				<div class="slider-text-inner text-center">
				   					<h2>Explore the most beautiful</h2>
				   					<h1>Sylhet</h1>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			   	<li style="background-image: url({{asset('img/rangamati_sajek.jpg')}});">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
				   				<div class="slider-text-inner text-center">
				   					<h2>Experience the Great</h2>
				   					<h1>Sajek Vally</h1>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>	   	
			  	</ul>
		  	</div>
		</aside>


		<div id="colorlib-reservation">
			<!-- <div class="container"> -->
				<div class="row">
					<div class="search-wrap">
						<div class="container">
							<ul class="nav nav-tabs">
							<li class="active"><a data-toggle="tab" href="#flight"><i class="flaticon-plane"></i> Flight</a></li>
								<li><a data-toggle="tab" href="#hotel"><i class="flaticon-resort"></i> Hotel</a></li>
								<li><a data-toggle="tab" href="#car"><i class="flaticon-car"></i>Car</a></li>
							</ul>
						</div>
						<div class="tab-content">

						<div id="flight" class="tab-pane fade">
						      <form method="post" class="colorlib-form">
							  @csrf
				              	<div class="row">
								<div class="col-md-2">
								<a href="{{route('userFlightList.showFlightList')}}" class="btn btn-primary btn-block" >Find Flight</a>
				                </div>
								  <div class="col-md-3">
				              	 	<div class="form-group">
				                     <div class="form-field">
				                    </div>
				                  </div>
				              	</div>
				                
				              </div>
				            </form>
						   </div>
				
				         <div id="hotel" class="tab-pane fade">
						      <form method="POST" class="colorlib-form">
							  @csrf
				              	<div class="row">
								  <div class="col-md-3">
				              	 	<div class="form-group">
				                    <label>Place:</label>
				                    <div class="form-field">
				                      <input type="text" id="location" name="location" class="form-control" placeholder="Search Location">
				                    </div>
				                  </div>
				              	 </div>
				                <div class="col-md-2">
								<input type="submit" name="searchHotel"  class="btn btn-primary btn-block"  value="search" id="submit">
				                </div>
				              </div>
				            </form>
						   </div>

						   <div id="car" class="tab-pane fade">
						      <form method="post" class="colorlib-form">
				              	<div class="row">
								<div class="col-md-2">
								<a href="{{route('userCarList.showCarList')}}" class="btn btn-primary btn-block" >Find Car</a>
				                </div>
								  <div class="col-md-3">
				              	 	<div class="form-group">
				                    <div class="form-field">
				                    </div>
				                  </div>
				              	 </div>
				              </div>
				            </form>
						   </div>

			         	</div>
					</div>
				</div>
			</div>
		</div>
		

		<div class="colorlib-tour colorlib-light-grey">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
						<h2>Popular Destination</h2>
						<p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
			</div>
			<div class="tour-wrap">
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image:url({{asset('img/cox_bazar1.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Cox's Bazar, Chittagong</h2>
						<span class="city">Cox's Bazar, Chittagong</span>
						<span class="price">৳10000</span>
					</span>
				</a>
				
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/rangamati_sajek1.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Sajek, Rangamati</h2>
						<span class="city">Sajek, Rangamati</span>
						<span class="price">৳10000</span>
					</span>
				</a>

				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/bandarban1.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Nafakuhm, Bandarban</h2>
						<span class="city">Nafakuhm, Bandarban</span>
						<span class="price">৳10000</span>
					</span>
				</a>

				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/sundarban1.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Sundarbans, Khulna</h2>
						<span class="city">Sundarbans, Khulna</span>
						<span class="price">৳10000</span>
					</span>
				</a>
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/sylhet.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Sylhet</h2>
						<span class="city">Sylhet</span>
						<span class="price">৳10000</span>
					</span>
				</a>
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/saint_martin.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Saint Martin</h2>
						<span class="city">Saint Martin</span>
						<span class="price">৳10000</span>
					</span>
				</a>
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/sylhet_ratargul.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Ratargul, Sylhet</h2>
						<span class="city">Ratargul, Sylhet</span>
						<span class="price">৳10000</span>
					</span>
				</a>
				<a href="{{route('userPackage.showPackage')}}" class="tour-entry animate-box">
					<div class="tour-img" style="background-image: url({{asset('img/bandarban2.jpg')}});">
					</div>
					<span class="desc">
						<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
						<h2>Bandarban</h2>
						<span class="city">Bandarban</span>
						<span class="price">৳10000</span>
					</span>
				</a>
			</div>
		</div>


		<div id="colorlib-hotel">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
						<h2>Recommended Hotels</h2>
						<p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 animate-box">
						<div class="owl-carousel">
							<div class="item">
								<div class="hotel-entry">
									<a href="{{route('userHotels.showHotel')}}" class="hotel-img" style="background-image: url({{asset('img/royal_tulip.jpg')}});">
										<p class="price"><span>৳1000</span><small> /night</small></p>
									</a>
									<div class="desc">
										<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
										<h3><a href="#">Royal Tulip Sea Pearl Beach Resort & Spa</a></h3>
										<span class="place">Inani beach, Cox's Bazar</span>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="hotel-entry">
									<a href="{{route('userHotels.showHotel')}}" class="hotel-img" style="background-image: url({{asset('img/royal_tulip1.jpg')}});">
										<p class="price"><span>৳1000</span><small> /night</small></p>
									</a>
									<div class="desc">
										<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
										<h3><a href="#">Royal Tulip Sea Pearl Beach Resort & Spa</a></h3>
										<span class="place">Inani beach, Cox's Bazar</span>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="hotel-entry">
									<a href="{{route('userHotels.showHotel')}}" class="hotel-img" style="background-image: url({{asset('img/royal_tulip.jpg')}});">
										<p class="price"><span>৳1000</span><small> /night</small></p>
									</a>
									<div class="desc">
										<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
										<h3><a href="#">Royal Tulip Sea Pearl Beach Resort & Spa</a></h3>
										<span class="place">Inani beach, Cox's Bazar</span>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="hotel-entry">
									<a href="{{route('userHotels.showHotel')}}" class="hotel-img" style="background-image: url({{asset('img/royal_tulip1.jpg')}});">
										<p class="price"><span>৳1000</span><small> /night</small></p>
									</a>
									<div class="desc">
										<p class="star"><span><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i><i class="icon-star-full"></i></span> 545 Reviews</p>
										<h3><a href="#">Royal Tulip Sea Pearl Beach Resort & Spa</a></h3>
										<span class="place">Inani beach, Cox's Bazar</span>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



		<div class="colorlib-tour">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
						<h2>Most Popular Travel Places</h2>
						<p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="f-tour">
							<div class="row row-pb-md">
								<div class="col-md-6">
									<div class="row">
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/cox_bazar1.jpg')}});">
												<div class="desc">
													<h3>Cox's Bazar - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/rangamati_sajek1.jpg')}});">
												<div class="desc">
													<h3>Sajek - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/bandarban1.jpg')}});">
												<div class="desc">
													<h3>Bandarban - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/sundarban1.jpg')}});">
												<div class="desc">
													<h3>Sundarban - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div class="col-md-6 animate-box">
									<div class="desc">
										<div class="row">
											<div class="col-md-12">
												<h3>Cox's Bazar, Bandarban</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br>
											</div>
											<div class="col-md-12">
												<h4>Best Tours City</h4>
												<div class="row">
													<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Cox's Bazar</a></li>
															<li><a href="#">Bandarban</a></li>
															<li><a href="#">Rangamati</a></li>
															<li><a href="#">Sajek</a></li>
														</ul>
													</div>
													<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Sundarban</a></li>
															<li><a href="#">Sylhet</a></li>
															<li><a href="#">Saint Martin</a></li>
															<li><a href="#">Ratargul</a></li>
														</ul>
													</div>
													<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Nafakhum</a></li>
															<li><a href="#">Jaflong</a></li>
															<li><a href="#">Bandarban</a></li>
															<li><a href="#">Sajek</a></li>
														</ul>
													</div>
												</div>
												<p><a href="{{route('userDestination.showdestination')}}" class="btn btn-primary">View All Places</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="f-tour">
							<div class="row">
								<div class="col-md-6 col-md-push-6">
									<div class="row">
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/sylhet.jpg')}});">
												<div class="desc">
													<h3>Sylhet - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/saint_martin.jpg')}});">
												<div class="desc">
													<h3>Saint Martin - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/sylhet_ratargul.jpg')}});">
												<div class="desc">
													<h3>Ratargul - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
										<div class="col-md-6 animate-box">
											<a  href="userPackage.showPackage" class="f-tour-img" style="background-image: url({{asset('img/bandarban2.jpg')}});">
												<div class="desc">
													<h3>Bandarban - 5 Days</h3>
													<p class="price"><span>৳5000</span> <small>/ person</small></p>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div class="col-md-6 animate-box col-md-pull-6 text-right">
									<div class="desc">
										<div class="row">
											<div class="col-md-12">
												<h3>Rangamati, Sylhet</h3>
												<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br>
											</div>
											<div class="col-md-12">
												<h4>Best Tours City</h4>
												<div class="row">
												<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Cox's Bazar</a></li>
															<li><a href="#">Bandarban</a></li>
															<li><a href="#">Rangamati</a></li>
															<li><a href="#">Sajek</a></li>
														</ul>
													</div>
													<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Sundarban</a></li>
															<li><a href="#">Sylhet</a></li>
															<li><a href="#">Saint Martin</a></li>
															<li><a href="#">Ratargul</a></li>
														</ul>
													</div>
													<div class="col-md-4 col-sm-4 col-xs-4">
														<ul>
															<li><a href="#">Nafakhum</a></li>
															<li><a href="#">Jaflong</a></li>
															<li><a href="#">Bandarban</a></li>
															<li><a href="#">Sajek</a></li>
														</ul>
													</div>
												</div>
												<p><a href="{{route('userDestination.showdestination')}}" class="btn btn-primary">View All Places</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div id="colorlib-subscribe" style="background-image: url({{asset('img/img_bg_2.jpg')}});" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
						<h2>Thank You For Visiting</h2>
					</div>
				</div>
			</div>
		</div>

		<footer id="colorlib-footer" role="contentinfo">
			<div class="container">
				<div class="row row-pb-md">
					<div class="col-md-3 colorlib-widget">
						<h4>Tour Agency</h4>
						<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
						<p>
							<ul class="colorlib-social-icons">
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-linkedin"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2 colorlib-widget">
						<h4>Book Now</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Flight</a></li>
								<li><a href="#">Hotels</a></li>
								<li><a href="#">Tour</a></li>
								<li><a href="#">Car Rent</a></li>
								<li><a href="#">Beach &amp; Resorts</a></li>
								<li><a href="#">Cruises</a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2 colorlib-widget">
						<h4>Top Deals</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Edina Hotel</a></li>
								<li><a href="#">Quality Suites</a></li>
								<li><a href="#">The Hotel Zephyr</a></li>
								<li><a href="#">Da Vinci Villa</a></li>
								<li><a href="#">Hotel Epikk</a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2">
						<h4>Blog Post</h4>
						<ul class="colorlib-footer-links">
							<li><a href="#">The Ultimate Packing List For Female Travelers</a></li>
							<li><a href="#">How These 5 People Found The Path to Their Dream Trip</a></li>
							<li><a href="#">A Definitive Guide to the Best Dining and Drinking Venues in the City</a></li>
						</ul>
					</div>

					<div class="col-md-3 col-md-push-1">
						<h4>Contact Information</h4>
						<ul class="colorlib-footer-links">
							<li>291 South 21th Street, <br> Suite 721 New York NY 10016</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
							<li><a href="#">yoursite.com</a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<p>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is Brought To You By <i class="icon-heart2" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Code-Projects.Org</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></span> 
							<span class="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
	</div>
	
	<!-- jQuery -->
	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Flexslider -->
	<script src="js/jquery.flexslider-min.js"></script>
	<!-- Owl carousel -->
	<script src="js/owl.carousel.min.js"></script>
	<!-- Magnific Popup -->
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/magnific-popup-options.js"></script>
	<!-- Date Picker -->
	<script src="js/bootstrap-datepicker.js"></script>
	<!-- Stellar Parallax -->
	<script src="js/jquery.stellar.min.js"></script>
	<!-- Main -->
	<script src="js/main.js"></script>

	</body>
</html>

