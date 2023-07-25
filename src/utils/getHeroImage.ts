import BlockedDrains from '../images/bg-blocked-drains.jpg';
import CctvDrainSurveys from '../images/bg-cctv-drain-surveys.jpg';
import DrainRepairs from '../images/bg-drain-repairs.jpg';
import Soakaways from '../images/bg-soakaways.jpg';
import GutterCleaning from '../images/bg-gutter-cleaning.jpg';
import Home from '../images/bg-home.jpg';

export function getHeroImage(serviceSlug: string): ImageMetadata {
	if (serviceSlug === 'blocked-drains') return BlockedDrains;
	if (serviceSlug === 'cctv-drain-surveys') return CctvDrainSurveys;
	if (serviceSlug === 'drain-repairs') return DrainRepairs;
	if (serviceSlug === 'soakaways-septic-tanks') return Soakaways;
	if (serviceSlug === 'gutter-cleaning') return GutterCleaning;

	return Home;
}
