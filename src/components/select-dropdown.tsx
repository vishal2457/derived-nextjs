import { useEffect } from "react";
import { IconLoader } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { FormControl } from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface SelectDropdownProps {
	onValueChange?: (value: string) => void;
	defaultValue: string | undefined;
	placeholder?: string;
	isPending?: boolean;
	items: { label: string; value: string }[] | undefined;
	disabled?: boolean;
	className?: string;
	isControlled?: boolean;
	name?: string;
}

export function SelectDropdown({
	defaultValue,
	onValueChange,
	isPending,
	items,
	placeholder,
	disabled,
	className = "",
	isControlled = false,
	name,
}: SelectDropdownProps) {
	const defaultState = isControlled
		? { value: defaultValue, onValueChange }
		: { defaultValue, onValueChange };

	useEffect(() => {
		if (items && items.length > 0) {
			const firstItem = items[0];
			if (firstItem) {
				onValueChange?.(firstItem.value);
			}
		}
	}, [items, onValueChange]);

	return (
		<Select {...defaultState} name={name}>
			<FormControl>
				<SelectTrigger disabled={disabled} className={cn(className)}>
					<SelectValue placeholder={placeholder ?? "Select"} />
				</SelectTrigger>
			</FormControl>
			<SelectContent>
				{isPending ? (
					<SelectItem disabled value="loading" className="h-14">
						<div className="flex items-center justify-center gap-2">
							<IconLoader className="h-5 w-5 animate-spin" />
							{"  "}
							Loading...
						</div>
					</SelectItem>
				) : (
					items?.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	);
}
