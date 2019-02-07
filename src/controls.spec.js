import { render,fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe("<Controls/>", () => {
	it("Should execute the passed function when clicked", () => {
		const mockFn = jest.fn();
		const { getByText } = render(<Controls toggleClosed={mockFn} closed={false}/>);
		const button = getByText(/close gate/i);

		fireEvent.click(button);
		expect(mockToggleClosed).toHaveBeenCalledTimes(1);
	});
});
