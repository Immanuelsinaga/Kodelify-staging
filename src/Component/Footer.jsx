import logo from "../assets/img/logo.png";

const Footer = () => {
  return(
    <>
		<footer id="footer" class="border-t border-gray-200 bg-black">
			<div class="mx-auto max-w-6xl px-4 sm:px-6">
				<div class="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
					<div class="col-span-12 lg:col-span-4">
						<div class="mb-2">
							<a
								class="inline-block text-xl font-medium opacity-50 grayscale transition hover:opacity-100"
								href="/">
								<span
									class="flex items-center gap-2 self-center text-2xl font-bold text-slate-200 hover:text-primary-700 whitespace-nowrap cursor-default">
									<img class="w-6 h-6" alt="Logo" src={logo} />
									<span>Kodelify</span>
								</span>
							</a>
						</div>
						<div class="text-sm text-slate-300">
							<a class="footer-link" href="/">Terms</a>
							<span> · </span>
							<a class="footer-link" href="/">Privacy Policy</a>
						</div>
					</div>
					<div class="col-span-6 md:col-span-3 lg:col-span-2 text-slate-300">
						<div class="footer-title text-slate-100+">Product</div>
						<ul class="text-sm">
							<li class="mb-2">
								<a class="footer-link" href="/">Features</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Security</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Team</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Enterprise</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Customer stories</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Pricing</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Resources</a>
							</li>
						</ul>
					</div>
					<div class="col-span-6 md:col-span-3 lg:col-span-2">
						<div class="footer-title">Platform</div>
						<ul class="text-sm">
							<li class="mb-2">
								<a class="footer-link" href="/">Developer API</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Partners</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Atom</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Electron</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">GitHub Desktop</a>
							</li>
						</ul>
					</div>
					<div class="col-span-6 md:col-span-3 lg:col-span-2">
						<div class="footer-title :text-slate-200">Support</div>
						<ul class="text-sm">
							<li class="mb-2">
								<a class="footer-link" href="/">Docs</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Community Forum</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Professional Services</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Skills</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Status</a>
							</li>
						</ul>
					</div>
					<div class="col-span-6 md:col-span-3 lg:col-span-2">
						<div class="footer-title ">Company</div>
						<ul class="text-sm">
							<li class="mb-2">
								<a class="footer-link" href=""> About</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/"> Blog</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/"> Careers</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/">Press</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/"> Inclusion</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/"> Social Impact</a>
							</li>
							<li class="mb-2">
								<a class="footer-link" href="/"> Shop</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="py-6 md:flex md:items-center md:justify-between md:py-8">
					<div class="mr-4 text-sm text-gray-700">
						<span>© 2024 </span>
						<span class="font-medium">Kodelify</span>
						<span> 🚀 All rights reserved.</span>
					</div>
				</div>
			</div>
		</footer>
    </>
  );
}

export default Footer