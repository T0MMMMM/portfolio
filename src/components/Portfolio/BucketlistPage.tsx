import ProjectPage from './ProjectPage';
import { PROJECTS } from '../../config/portfolioData';

const BucketlistPage: React.FC = () => <ProjectPage project={PROJECTS[1]} />;
export default BucketlistPage;
