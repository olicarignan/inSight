import React, { useState } from 'react';
import './appointment-info-card.scss';

export default function AppointmentInfoCard(props) {
	return (
		<body>
			<div class="container">
				<div class="card-body">
	<h5 class="card-title text-center">asfas</h5>
					<form class="form-signin">
						<div class="form-label-group">
							<h6 class="text-center">event details</h6>
						</div>
						<div class="form-label-group">
							<h6 class="text-center">event details</h6>
						</div>
						<div class="form-label-group">
							<h6 class="text-center">event details</h6>
						</div>
						<hr class="my-4" />
						<button
							class="btn btn-lg btn-primary btn-block text-uppercase"
							onClick={(event) => {
                event.preventDefault(); 
                props.setShow(true)} }
						>
							Edit
						</button>
						<button
							class="btn btn-lg btn-primary btn-block btn-danger text-uppercase"
							onClick={(event) => {
                event.preventDefault()
								props.setShowEventInfo(false);
							}}
						>
							Cancel
						</button>
					</form>
				</div>
			</div>
		</body>
	);
}

