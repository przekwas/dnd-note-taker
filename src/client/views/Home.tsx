import React from 'react';
import { Container, LoaderCard, Toast } from '../components';
import { useAuth } from '../utilities/use-auth';

interface HomeProps {}

const Home = (props: HomeProps) => {
	const { authenticated } = useAuth();

	const testToast = () => {
		Toast.error('Woooooooooooooooo!');
	};

	return (
		<Container id="special" data-wow="cupcake">
			<h1>Home {authenticated ? 'logged in' : 'logged out'}</h1>
			<div>
				<button onClick={testToast} className="btn btn-primary">
					Test Button
				</button>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui similique sit,
				minus totam dicta architecto dolore recusandae rerum, quaerat laborum perspiciatis.
				Quia assumenda ea eius expedita, eligendi aut beatae! Doloribus saepe voluptatem
				debitis commodi, eligendi quibusdam adipisci aliquid eveniet doloremque maxime
				ducimus expedita quos tempore enim cupiditate aliquam perspiciatis unde cumque
				deserunt voluptas. Error impedit ex odit veritatis pariatur? Accusamus ex nihil
				ratione eius alias placeat consectetur debitis quos eligendi vel, vero culpa ducimus
				odio facilis asperiores maxime illo. Nostrum similique, fuga unde ad quaerat
				voluptatem ex praesentium impedit. Nihil accusantium maiores ratione? Ratione
				blanditiis fuga, repellat dolorum impedit, ab temporibus maxime nisi amet corrupti
				omnis. Quaerat, beatae ea velit iste perferendis laudantium et vitae sint provident
				voluptatibus reiciendis? Nulla non nemo voluptatum beatae quos facilis? Ipsam totam
				perspiciatis qui sit blanditiis eum alias exercitationem vel ut nam? Voluptate sed,
				eum nemo atque consequatur inventore sequi? Fugit, reprehenderit! Consectetur?
				Doloremque mollitia totam quibusdam placeat minus dolorem, pariatur cupiditate quas?
				Cumque doloremque laboriosam delectus obcaecati qui vero quisquam dolorum vel
				consequatur dignissimos sequi maiores maxime quam, nam expedita ullam odio! Eum
				molestiae possimus accusamus, quaerat ut enim blanditiis placeat ex suscipit qui
				atque provident iste perspiciatis iusto distinctio laboriosam libero aliquid dolores
				ipsum voluptatem reprehenderit nam, cupiditate aspernatur reiciendis! Ipsum! Tempore
				quia perspiciatis blanditiis vel voluptatibus ipsa officia animi officiis dicta iure
				aliquid, eligendi incidunt impedit quae necessitatibus nobis, cum eius dolorem dolor
				doloribus magni neque possimus. Dolor, illo dicta? Nisi ipsa, voluptas accusantium
				aliquid eos, dolore earum expedita doloribus, sed facere fugiat illum quam neque
				architecto quos quidem aliquam eius vitae suscipit reprehenderit tempore dolorum
				doloremque! Dignissimos, sed corporis? Maxime reiciendis tenetur aperiam corporis
				odit esse magni voluptatum at iste? Quos ad necessitatibus impedit, nam quibusdam
				soluta incidunt aspernatur ratione, rem eius nostrum ab odio? Fugiat esse vel
				nostrum? Voluptates omnis doloremque natus illum pariatur, in repellendus minus
				officia et quas iusto nihil, dolorum esse! Ipsam dolorum enim tempora eligendi iure
				odit nesciunt cum quo? Exercitationem veritatis a repellat! Illo temporibus, laborum
				corporis eum distinctio eos ut aliquid suscipit. Ea cumque recusandae sed tempora
				ipsa doloribus, commodi praesentium similique, cupiditate sit rerum aliquid,
				mollitia asperiores enim voluptatibus aliquam vitae. Non harum temporibus voluptatem
				culpa aperiam? Minus libero excepturi explicabo voluptate distinctio delectus!
				Voluptates quae quos sit eum accusamus, possimus assumenda quibusdam laudantium modi
				omnis error at architecto, dicta placeat. Porro, non minima architecto ipsam culpa
				incidunt, omnis vitae, hic deleniti cupiditate nemo sapiente officia aliquid ex!
				Molestias magnam iste culpa illo sit! Aspernatur maiores, quisquam consectetur ipsum
				veritatis deserunt. Fugit delectus est eum voluptatibus, voluptates mollitia ad
				necessitatibus cupiditate harum dignissimos, minima et repudiandae ullam similique
				cum dolorem quis eveniet animi explicabo officia recusandae vero iste voluptatum!
				Illo, quisquam!
			</p>
		</Container>
	);
};

export default Home;
